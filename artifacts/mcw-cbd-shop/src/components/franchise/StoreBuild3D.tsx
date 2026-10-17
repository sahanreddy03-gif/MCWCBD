import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, RoundedBox } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/*
 * Scroll-driven 3D build of a franchise store.
 * `progress` runs 0 → 11: chapter 0 is the empty shell, chapters 1–10 are the
 * ten package inclusions (in page order), chapter 11 is the finished store.
 * A chapter's text is centred on screen when progress equals its number, so
 * each piece is timed to land just before its chapter is centred.
 */

type V3 = [number, number, number];

const GREEN = "#22c55e";
const sat = (x: number) => Math.min(1, Math.max(0, x));
const smooth = (t: number) => t * t * (3 - 2 * t);
const sstep = (a: number, b: number, x: number) => smooth(sat((x - a) / (b - a)));
const easeOutBack = (t: number) => {
  const c1 = 1.5;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
/** 0 → 1 as a piece arrives for chapter `at`. */
const arrive = (p: number, at: number, delay = 0) => sstep(at - 0.55 + delay, at - 0.05 + delay, p);
/** Chapter 8 (assembly): pieces lift apart, hold, then snap back together. */
const exploded = (p: number) => sstep(7.3, 7.6, p) * (1 - sstep(7.68, 7.97, p));

const StoryCtx = createContext<{ p: MutableRefObject<number> } | null>(null);
function useStory() {
  const ctx = useContext(StoryCtx);
  if (!ctx) throw new Error("useStory outside StoreBuild3D");
  return ctx.p;
}

/* ------------------------------------------------------------------ */
/* Textures                                                             */
/* ------------------------------------------------------------------ */

function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void, repeat?: [number, number]) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d")!);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (repeat) {
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(...repeat);
  }
  return tex;
}

function useFontsReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let alive = true;
    Promise.all([document.fonts.load('400 120px "Bebas Neue"'), document.fonts.load("700 40px Inter")])
      .catch(() => undefined)
      .finally(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, []);
  return ready;
}

function neonText(text: string, w: number, h: number, size: number, spacing = 10) {
  return canvasTexture(w, h, (ctx) => {
    ctx.font = `400 ${size}px "Bebas Neue", Impact, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = `${spacing}px`;
    ctx.shadowColor = GREEN;
    for (const blur of [60, 30, 12]) {
      ctx.shadowBlur = blur;
      ctx.fillStyle = "#4ade80";
      ctx.fillText(text, w / 2, h / 2 + size * 0.04);
    }
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#eafff1";
    ctx.fillText(text, w / 2, h / 2 + size * 0.04);
  });
}

function labelTexture(
  lines: { text: string; size: number; color: string; weight?: string; font?: string; spacing?: number }[],
  w: number,
  h: number,
  bg?: (ctx: CanvasRenderingContext2D) => void,
) {
  return canvasTexture(w, h, (ctx) => {
    bg?.(ctx);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const total = lines.reduce((s, l) => s + l.size * 1.1, 0);
    let y = h / 2 - total / 2;
    for (const l of lines) {
      ctx.font = `${l.weight ?? "400"} ${l.size}px ${l.font ?? '"Bebas Neue", Impact, sans-serif'}`;
      (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = `${l.spacing ?? 0}px`;
      ctx.fillStyle = l.color;
      ctx.fillText(l.text, w / 2, y + (l.size * 1.1) / 2);
      y += l.size * 1.1;
    }
  });
}

/* ------------------------------------------------------------------ */
/* Shared materials                                                     */
/* ------------------------------------------------------------------ */

function useMaterials() {
  return useMemo(() => {
    const std = (color: string, roughness = 0.6, metalness = 0) =>
      new THREE.MeshStandardMaterial({ color, roughness, metalness });
    const glow = (color: string, strength: number) =>
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(strength), toneMapped: false });
    return {
      wall: std("#121513", 0.92),
      wood: std("#9a7552", 0.55),
      darkWood: std("#3a2a1d", 0.7),
      stone: std("#e9e6df", 0.32),
      black: std("#0d0e0d", 0.45, 0.4),
      steel: std("#c9cdd2", 0.22, 0.95),
      brass: std("#c8a24a", 0.28, 1),
      leaf: new THREE.MeshStandardMaterial({ color: "#1f6b3a", roughness: 0.8, flatShading: true }),
      leafDark: new THREE.MeshStandardMaterial({ color: "#14532d", roughness: 0.85, flatShading: true }),
      pot: std("#d9d4ca", 0.7),
      rug: std("#172219", 0.95),
      greenGlow: glow(GREEN, 3.2),
      warmGlow: glow("#ffcf7a", 4),
      coolGlow: glow("#e8fff1", 2.2),
      glass: new THREE.MeshPhysicalMaterial({
        color: "#ffffff",
        roughness: 0.04,
        metalness: 0,
        transmission: 0.96,
        thickness: 0.08,
        ior: 1.45,
        transparent: true,
        opacity: 0.9,
      }),
      clearGlass: new THREE.MeshStandardMaterial({
        color: "#d1fae5",
        roughness: 0.05,
        metalness: 0.6,
        transparent: true,
        opacity: 0.16,
        depthWrite: false,
      }),
      productColors: ["#22c55e", "#f4f4f0", "#111111", "#eab308", "#15803d", "#d6d3cd", "#0f3d22"].map((c) =>
        std(c, 0.45, 0.05),
      ),
    };
  }, []);
}
type Mats = ReturnType<typeof useMaterials>;

/* ------------------------------------------------------------------ */
/* Animation helper                                                     */
/* ------------------------------------------------------------------ */

function Reveal({
  at,
  delay = 0,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  from = [0, 0, 0],
  scaleFrom = 1,
  bounce = false,
  explode,
  children,
}: {
  at: number;
  delay?: number;
  position?: V3;
  rotation?: V3;
  from?: V3;
  scaleFrom?: number;
  bounce?: boolean;
  explode?: V3;
  children: ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  const p = useStory();

  useFrame(() => {
    const g = ref.current;
    if (!g) return;
    const v = p.current;
    const t = sat((v - (at - 0.55 + delay)) / 0.5);
    const e = bounce ? easeOutBack(t) : smooth(t);
    const exr = explode ? exploded(v) : 0;
    const ex = exr * 1.9;
    g.visible = t > 0.001;
    g.position.set(
      position[0] + from[0] * (1 - e) + (explode?.[0] ?? 0) * ex,
      position[1] + from[1] * (1 - e) + (explode?.[1] ?? 0) * ex,
      position[2] + from[2] * (1 - e) + (explode?.[2] ?? 0) * ex,
    );
    g.rotation.set(
      rotation[0] + exr * 0.18,
      rotation[1] + exr * 0.5 * Math.sign((explode?.[0] ?? 0) + 0.01),
      rotation[2],
    );
    g.scale.setScalar(scaleFrom + (1 - scaleFrom) * e);
  });

  return <group ref={ref}>{children}</group>;
}

/* ------------------------------------------------------------------ */
/* Store shell                                                          */
/* ------------------------------------------------------------------ */

function Shell({ mats }: { mats: Mats }) {
  const p = useStory();
  const backRef = useRef<THREE.Group>(null);
  const leftRef = useRef<THREE.Group>(null);
  const edgeMat = useMemo(
    () => new THREE.LineBasicMaterial({ color: GREEN, transparent: true, toneMapped: false }),
    [],
  );
  const stripMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(GREEN).multiplyScalar(3),
        toneMapped: false,
        transparent: true,
      }),
    [],
  );
  const backEdges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(8, 4, 0.12)), []);
  const leftEdges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(0.12, 4, 6)), []);
  const floorEdges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(8, 0.12, 6)), []);

  const floorTex = useMemo(
    () =>
      canvasTexture(1024, 768, (ctx) => {
        ctx.fillStyle = "#0f1210";
        ctx.fillRect(0, 0, 1024, 768);
        ctx.strokeStyle = "#1c241e";
        ctx.lineWidth = 2;
        for (let x = 0; x <= 1024; x += 64) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, 768);
          ctx.stroke();
        }
        for (let y = 0; y <= 768; y += 64) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(1024, y);
          ctx.stroke();
        }
      }),
    [],
  );

  useFrame(() => {
    const v = p.current;
    const rise = Math.max(0.001, sstep(0.05, 0.5, v));
    backRef.current?.scale.set(1, rise, 1);
    leftRef.current?.scale.set(1, rise, 1);
    edgeMat.opacity = 0.9 * (1 - sstep(0.6, 1.2, v)) + 0.08;
    stripMat.opacity = sstep(0.35, 0.6, v);
  });

  return (
    <group>
      <mesh position={[0, -0.06, 0]} receiveShadow>
        <boxGeometry args={[8, 0.12, 6]} />
        <meshStandardMaterial map={floorTex} roughness={0.78} metalness={0.05} />
      </mesh>
      <lineSegments geometry={floorEdges} material={edgeMat} position={[0, -0.06, 0]} />

      <group ref={backRef}>
        <mesh position={[0, 2, -3.06]} material={mats.wall} receiveShadow>
          <boxGeometry args={[8, 4, 0.12]} />
        </mesh>
        <lineSegments geometry={backEdges} material={edgeMat} position={[0, 2, -3.06]} />
        <mesh position={[0, 3.97, -2.99]} material={stripMat}>
          <boxGeometry args={[8, 0.03, 0.03]} />
        </mesh>
      </group>
      <group ref={leftRef}>
        <mesh position={[-4.06, 2, 0]} material={mats.wall} receiveShadow>
          <boxGeometry args={[0.12, 4, 6]} />
        </mesh>
        <lineSegments geometry={leftEdges} material={edgeMat} position={[-4.06, 2, 0]} />
        <mesh position={[-3.99, 3.97, 0]} material={stripMat}>
          <boxGeometry args={[0.03, 0.03, 6]} />
        </mesh>
      </group>
    </group>
  );
}

function Ground() {
  const p = useStory();
  const dots = useMemo(
    () =>
      canvasTexture(
        128,
        128,
        (ctx) => {
          ctx.fillStyle = "#000";
          ctx.fillRect(0, 0, 128, 128);
          ctx.fillStyle = "#9ca3af";
          ctx.beginPath();
          ctx.arc(64, 64, 5, 0, Math.PI * 2);
          ctx.fill();
        },
        [70, 70],
      ),
    [],
  );
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: dots,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [dots],
  );
  useFrame(() => {
    const v = p.current;
    const terr = sstep(6.45, 6.95, v) * (1 - sstep(7.45, 7.8, v));
    mat.opacity = 0.12 + 0.35 * sstep(5.45, 5.95, v) + 0.45 * terr;
  });
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.125, 0]} material={mat}>
      <planeGeometry args={[140, 140]} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/* 01 — Trademark: neon sign                                            */
/* ------------------------------------------------------------------ */

function NeonSign({ mats, fontsReady }: { mats: Mats; fontsReady: boolean }) {
  const p = useStory();
  const tex = useMemo(() => neonText("WEED CBD RELAX STORE", 2048, 320, 230, 14), [fontsReady]);
  const mat = useMemo(
    () => new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, depthWrite: false }),
    [tex],
  );
  const light = useRef<THREE.PointLight>(null);
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const v = p.current;
    const mount = sstep(0.32, 0.5, v);
    if (group.current) {
      group.current.visible = mount > 0.001;
      group.current.scale.set(1, Math.max(0.001, mount), 1);
    }
    const on = sat((v - 0.5) / 0.45);
    let level = 0.06;
    if (on > 0 && on < 1) {
      const f = Math.sin(clock.elapsedTime * 47) * Math.sin(clock.elapsedTime * 13.3);
      level = f > 0.15 ? on : on * 0.15;
    } else if (on >= 1) {
      level = 1 + Math.sin(clock.elapsedTime * 2.2) * 0.04;
    }
    mat.color.setScalar(0.25 + level * 1.85);
    if (light.current) light.current.intensity = level * 6;
  });

  return (
    <group ref={group} position={[0.6, 3.05, -2.9]}>
      <RoundedBox
        args={[4.05, 0.82, 0.06]}
        radius={0.03}
        smoothness={3}
        material={mats.black}
        position={[0, 0, -0.04]}
      />
      <mesh material={mat}>
        <planeGeometry args={[3.85, 0.6]} />
      </mesh>
      <pointLight ref={light} color={GREEN} distance={4.5} decay={2} position={[0, 0, 0.6]} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Interior furnishings & decorative design                        */
/* ------------------------------------------------------------------ */

function Products({ mats, count, width, seed = 1 }: { mats: Mats; count: number; width: number; seed?: number }) {
  const items = useMemo(() => {
    const out: { x: number; h: number; r: number; jar: boolean; m: number }[] = [];
    let s = seed * 9301;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    for (let i = 0; i < count; i++) {
      out.push({
        x: -width / 2 + (width / count) * (i + 0.5),
        h: 0.16 + rnd() * 0.16,
        r: 0.05 + rnd() * 0.03,
        jar: rnd() > 0.45,
        m: Math.floor(rnd() * mats.productColors.length),
      });
    }
    return out;
  }, [count, width, seed, mats]);

  return (
    <group>
      {items.map((it, i) =>
        it.jar ? (
          <mesh key={i} position={[it.x, it.h / 2, 0]} material={mats.productColors[it.m]} castShadow>
            <cylinderGeometry args={[it.r, it.r, it.h, 16]} />
          </mesh>
        ) : (
          <mesh key={i} position={[it.x, it.h / 2, 0]} material={mats.productColors[it.m]} castShadow>
            <boxGeometry args={[it.r * 2, it.h, it.r * 1.6]} />
          </mesh>
        ),
      )}
    </group>
  );
}

function Plant({ mats, scale = 1 }: { mats: Mats; scale?: number }) {
  return (
    <group scale={scale}>
      <mesh position={[0, 0.28, 0]} material={mats.pot} castShadow>
        <cylinderGeometry args={[0.26, 0.2, 0.56, 20]} />
      </mesh>
      <mesh position={[0, 0.95, 0]} material={mats.leaf} castShadow>
        <icosahedronGeometry args={[0.42, 0]} />
      </mesh>
      <mesh position={[0.18, 1.32, 0.05]} material={mats.leafDark} castShadow>
        <icosahedronGeometry args={[0.3, 0]} />
      </mesh>
      <mesh position={[-0.16, 1.22, -0.08]} material={mats.leaf} castShadow>
        <icosahedronGeometry args={[0.27, 0]} />
      </mesh>
    </group>
  );
}

function Pendant({ mats, x }: { mats: Mats; x: number }) {
  const p = useStory();
  const light = useRef<THREE.PointLight>(null);
  useFrame(() => {
    if (light.current) light.current.intensity = arrive(p.current, 2, 0.25) * 2.4;
  });
  return (
    <group position={[x, 0, 0.3]}>
      <mesh position={[0, 3.85, 0]} material={mats.black}>
        <cylinderGeometry args={[0.006, 0.006, 1, 6]} />
      </mesh>
      <mesh position={[0, 3.3, 0]} material={mats.brass} castShadow>
        <coneGeometry args={[0.22, 0.24, 24, 1, true]} />
      </mesh>
      <mesh position={[0, 3.2, 0]} material={mats.warmGlow}>
        <sphereGeometry args={[0.07, 16, 16]} />
      </mesh>
      <pointLight ref={light} color="#ffcf7a" distance={3.6} decay={2} position={[0, 3.05, 0]} />
    </group>
  );
}

function Stool({ mats }: { mats: Mats }) {
  return (
    <group>
      <mesh position={[0, 0.74, 0]} material={mats.wood} castShadow>
        <cylinderGeometry args={[0.21, 0.21, 0.06, 24]} />
      </mesh>
      <mesh position={[0, 0.37, 0]} material={mats.steel}>
        <cylinderGeometry args={[0.025, 0.025, 0.72, 10]} />
      </mesh>
      <mesh position={[0, 0.015, 0]} material={mats.steel}>
        <cylinderGeometry args={[0.18, 0.18, 0.03, 24]} />
      </mesh>
    </group>
  );
}

function Interior({ mats }: { mats: Mats }) {
  const slats = Array.from({ length: 13 }, (_, i) => -2.7 + i * 0.18);
  return (
    <group>
      <Reveal at={2} from={[0, -3.6, 0]} explode={[0, 0.6, 1.6]}>
        {slats.map((x) => (
          <mesh key={x} position={[x, 1.65, -2.96]} material={mats.wood} castShadow receiveShadow>
            <boxGeometry args={[0.11, 3.3, 0.05]} />
          </mesh>
        ))}
        {[1.25, 1.95].map((y, i) => (
          <group key={y} position={[-1.62, y, -2.78]}>
            <mesh material={mats.darkWood} castShadow receiveShadow>
              <boxGeometry args={[2.1, 0.05, 0.32]} />
            </mesh>
            <group position={[0, 0.025, 0]}>
              <Products mats={mats} count={9} width={1.9} seed={i + 3} />
            </group>
          </group>
        ))}
      </Reveal>

      {[1.0, 1.6, 2.2].map((y, i) => (
        <Reveal
          key={y}
          at={2}
          delay={0.08 + i * 0.06}
          from={[0, -3.5, 0]}
          position={[2.6, y, -2.8]}
          explode={[0.8, 1.2, 1.4]}
        >
          <mesh material={mats.wood} castShadow receiveShadow>
            <boxGeometry args={[2, 0.05, 0.34]} />
          </mesh>
          <group position={[0, 0.025, 0]}>
            <Products mats={mats} count={8} width={1.8} seed={i + 11} />
          </group>
        </Reveal>
      ))}

      <Reveal at={2} delay={0.1} position={[-3.3, 0, -2.45]} scaleFrom={0} bounce explode={[-0.6, 0.5, 0.8]}>
        <Plant mats={mats} scale={1.15} />
      </Reveal>
      <Reveal at={2} delay={0.18} position={[3.45, 0, 2.35]} scaleFrom={0} bounce explode={[0.8, 0.5, 0.8]}>
        <Plant mats={mats} scale={0.85} />
      </Reveal>
      <Reveal at={2} delay={0.22} position={[-3.35, 0, 2.45]} scaleFrom={0} bounce explode={[-0.8, 0.5, 0.8]}>
        <Plant mats={mats} scale={0.7} />
      </Reveal>

      {[-0.2, 0.9, 2.0].map((x, i) => (
        <Reveal key={x} at={2} delay={0.12 + i * 0.07} from={[0, 3.2, 0]} explode={[0, 1.4, 0]}>
          <Pendant mats={mats} x={x} />
        </Reveal>
      ))}

      <Reveal at={2} delay={0.05} position={[1.0, 0.004, 2.1]} scaleFrom={0} explode={[0, 0.2, 0.6]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} material={mats.rug} receiveShadow>
          <circleGeometry args={[1.45, 48]} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]} material={mats.greenGlow}>
          <ringGeometry args={[1.38, 1.4, 64]} />
        </mesh>
      </Reveal>

      {[0.3, 1.6].map((x, i) => (
        <Reveal
          key={x}
          at={2}
          delay={0.2 + i * 0.06}
          position={[x, 0, 1.4]}
          from={[0, 2.5, 0]}
          bounce
          explode={[0, 0.6, 1.8]}
        >
          <Stool mats={mats} />
        </Reveal>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — Retail counter with glass countertop                            */
/* ------------------------------------------------------------------ */

function Counter({ mats }: { mats: Mats }) {
  const frontSlats = Array.from({ length: 30 }, (_, i) => -1.56 + i * 0.1075);
  const caseEdges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(2.2, 0.38, 0.8)), []);
  const brassLine = useMemo(() => new THREE.LineBasicMaterial({ color: "#c8a24a" }), []);
  return (
    <group>
      <Reveal at={3} position={[0.9, 0, 0.3]} from={[7, 0, 0]} explode={[0, 0.5, 1.2]}>
        <mesh position={[0, 0.5, 0]} material={mats.darkWood} castShadow receiveShadow>
          <boxGeometry args={[3.2, 1.0, 0.9]} />
        </mesh>
        {frontSlats.map((x) => (
          <mesh key={x} position={[x, 0.52, 0.465]} material={mats.wood} castShadow>
            <boxGeometry args={[0.07, 0.9, 0.03]} />
          </mesh>
        ))}
        <mesh position={[0, 0.03, 0.43]} material={mats.greenGlow}>
          <boxGeometry args={[3.1, 0.02, 0.02]} />
        </mesh>
        <mesh position={[0, 1.03, 0]} material={mats.stone} castShadow receiveShadow>
          <boxGeometry args={[3.32, 0.06, 1.0]} />
        </mesh>
      </Reveal>

      <Reveal at={3} delay={0.2} position={[0.5, 1.06, 0.3]} from={[0, 1.6, 0]} explode={[0, 1.6, 1.6]}>
        <mesh position={[0, 0.19, 0]} material={mats.glass}>
          <boxGeometry args={[2.2, 0.38, 0.8]} />
        </mesh>
        <lineSegments geometry={caseEdges} material={brassLine} position={[0, 0.19, 0]} />
        <group position={[0, 0.01, 0.12]}>
          <Products mats={mats} count={10} width={2.0} seed={21} />
        </group>
        <group position={[0, 0.01, -0.16]}>
          <Products mats={mats} count={9} width={1.9} seed={27} />
        </group>
      </Reveal>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 04 — Beverage refrigerator                                           */
/* ------------------------------------------------------------------ */

function Fridge({ mats }: { mats: Mats }) {
  const p = useStory();
  const light = useRef<THREE.PointLight>(null);
  const inner = useRef<THREE.MeshBasicMaterial>(null);
  const innerLight = useRef<THREE.PointLight>(null);
  const bottles = useMemo(() => {
    const out: { y: number; z: number; m: number }[] = [];
    [0.45, 0.88, 1.31, 1.74].forEach((y, row) => {
      for (let i = 0; i < 6; i++) out.push({ y, z: -0.36 + i * 0.145, m: (i + row * 2) % 5 });
    });
    return out;
  }, []);
  const bottleMats = useMemo(
    () =>
      ["#22c55e", "#f5f5f4", "#eab308", "#0ea5e9", "#16a34a"].map(
        (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.25, metalness: 0.1 }),
      ),
    [],
  );
  useFrame(() => {
    const a = arrive(p.current, 4, 0.2);
    if (light.current) light.current.intensity = a * 3;
    if (innerLight.current) innerLight.current.intensity = a * 3.5;
    if (inner.current) inner.current.color.setScalar(0.08 + a * 1.4);
  });

  return (
    <Reveal at={4} position={[-3.55, 0, -1.25]} from={[-1.2, 0, 0]} explode={[1.6, 1.0, 0]}>
      <mesh position={[0, 1.1, 0]} material={mats.black} castShadow receiveShadow>
        <boxGeometry args={[0.8, 2.2, 1.02]} />
      </mesh>
      <mesh position={[0.05, 1.08, 0]}>
        <boxGeometry args={[0.66, 1.86, 0.88]} />
        <meshBasicMaterial ref={inner} color="#e8fff1" toneMapped={false} side={THREE.BackSide} />
      </mesh>
      {[0.42, 0.85, 1.28, 1.71].map((y) => (
        <mesh key={y} position={[0.06, y, 0]} material={mats.steel}>
          <boxGeometry args={[0.6, 0.015, 0.84]} />
        </mesh>
      ))}
      {bottles.map((b, i) => (
        <group key={i} position={[0.12, b.y, b.z]}>
          <mesh position={[0, 0.13, 0]} material={bottleMats[b.m]}>
            <cylinderGeometry args={[0.045, 0.045, 0.26, 12]} />
          </mesh>
          <mesh position={[0, 0.3, 0]} material={bottleMats[b.m]}>
            <cylinderGeometry args={[0.018, 0.04, 0.08, 10]} />
          </mesh>
        </group>
      ))}
      <mesh position={[0.41, 1.08, 0]} material={mats.clearGlass}>
        <boxGeometry args={[0.03, 1.9, 0.92]} />
      </mesh>
      <mesh position={[0.43, 2.12, 0]} material={mats.greenGlow}>
        <boxGeometry args={[0.01, 0.07, 0.7]} />
      </mesh>
      <mesh position={[0.44, 1.1, 0.4]} material={mats.steel}>
        <boxGeometry args={[0.04, 0.6, 0.03]} />
      </mesh>
      <pointLight ref={light} color="#e8fff1" distance={3} decay={2} position={[0.9, 1.2, 0]} />
      <pointLight ref={innerLight} color="#f0fff4" distance={1.8} decay={2} position={[0.2, 1.25, 0]} />
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — Coffee machine                                                  */
/* ------------------------------------------------------------------ */

function Steam() {
  const p = useStory();
  const puffs = useRef<THREE.Mesh[]>([]);
  const tex = useMemo(
    () =>
      canvasTexture(64, 64, (ctx) => {
        const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        g.addColorStop(0, "rgba(255,255,255,0.9)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 64, 64);
      }),
    [],
  );
  const mats = useMemo(
    () =>
      Array.from(
        { length: 6 },
        () => new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0 }),
      ),
    [tex],
  );
  useFrame(({ clock, camera }) => {
    const on = arrive(p.current, 5, 0.35);
    puffs.current.forEach((m, i) => {
      if (!m) return;
      const t = (clock.elapsedTime * 0.45 + i / 6) % 1;
      m.position.set(Math.sin(t * 6 + i) * 0.04, t * 0.55, 0);
      m.scale.setScalar(0.06 + t * 0.16);
      m.quaternion.copy(camera.quaternion);
      mats[i].opacity = on * Math.sin(t * Math.PI) * 0.4;
    });
  });
  return (
    <group position={[0, 0.3, 0.17]}>
      {mats.map((m, i) => (
        <mesh key={i} ref={(el) => void (el && (puffs.current[i] = el))} material={m}>
          <planeGeometry args={[1, 1]} />
        </mesh>
      ))}
    </group>
  );
}

function CoffeeMachine({ mats }: { mats: Mats }) {
  return (
    <Reveal at={5} position={[2.08, 1.06, 0.2]} from={[0, 2.8, 0]} bounce explode={[1.0, 2.6, 1.2]}>
      <RoundedBox
        args={[0.52, 0.58, 0.46]}
        radius={0.04}
        smoothness={4}
        position={[0, 0.29, -0.02]}
        material={mats.steel}
        castShadow
      />
      <mesh position={[0, 0.36, 0.215]} material={mats.black}>
        <boxGeometry args={[0.44, 0.3, 0.02]} />
      </mesh>
      <mesh position={[0.12, 0.44, 0.23]} material={mats.greenGlow}>
        <boxGeometry args={[0.1, 0.035, 0.005]} />
      </mesh>
      <mesh position={[0, 0.24, 0.26]} material={mats.black}>
        <cylinderGeometry args={[0.055, 0.055, 0.06, 20]} />
      </mesh>
      <mesh position={[0, 0.02, 0.24]} material={mats.black}>
        <boxGeometry args={[0.4, 0.03, 0.14]} />
      </mesh>
      <mesh position={[0, 0.08, 0.26]} material={mats.stone}>
        <cylinderGeometry args={[0.045, 0.035, 0.08, 20]} />
      </mesh>
      <Steam />
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* 06 — National & international advertising                            */
/* ------------------------------------------------------------------ */

/** Shows its children only while progress is inside [from, to]. */
function During({ from, to, children }: { from: number; to: number; children: ReactNode }) {
  const p = useStory();
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) ref.current.visible = p.current > from && p.current < to;
  });
  return <group ref={ref}>{children}</group>;
}

function Billboard({ tex, height = 4.2 }: { tex: THREE.Texture; height?: number }) {
  return (
    <group>
      <mesh position={[0, height / 2, 0]}>
        <cylinderGeometry args={[0.08, 0.1, height, 12]} />
        <meshStandardMaterial color="#1a1d1b" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, height + 1.05, 0]}>
        <boxGeometry args={[4.4, 2.3, 0.14]} />
        <meshStandardMaterial color="#0b0c0b" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, height + 1.05, 0.075]}>
        <planeGeometry args={[4.2, 2.1]} />
        <meshBasicMaterial map={tex} toneMapped={false} color={new THREE.Color(1.5, 1.5, 1.5)} />
      </mesh>
    </group>
  );
}

function Advertising({ mats, fontsReady }: { mats: Mats; fontsReady: boolean }) {
  const p = useStory();
  const rings = useRef<THREE.Mesh[]>([]);
  const ringMats = useMemo(
    () =>
      Array.from(
        { length: 4 },
        () =>
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(GREEN).multiplyScalar(2.2),
            transparent: true,
            toneMapped: false,
            depthWrite: false,
          }),
      ),
    [],
  );
  const bg = (ctx: CanvasRenderingContext2D) => {
    const g = ctx.createLinearGradient(0, 0, 1024, 512);
    g.addColorStop(0, "#052e16");
    g.addColorStop(1, "#000");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 1024, 512);
    ctx.strokeStyle = GREEN;
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, 984, 472);
  };
  const national = useMemo(
    () =>
      labelTexture(
        [
          { text: "NATIONAL", size: 170, color: "#ffffff", spacing: 6 },
          { text: "ADVERTISING", size: 92, color: GREEN, spacing: 14 },
        ],
        1024,
        512,
        bg,
      ),
    [fontsReady],
  );
  const international = useMemo(
    () =>
      labelTexture(
        [
          { text: "INTERNATIONAL", size: 150, color: "#ffffff", spacing: 4 },
          { text: "ADVERTISING", size: 92, color: GREEN, spacing: 14 },
        ],
        1024,
        512,
        bg,
      ),
    [fontsReady],
  );
  const poster = useMemo(
    () =>
      labelTexture(
        [
          { text: "CBD", size: 150, color: GREEN },
          { text: "RELAX", size: 210, color: "#ffffff" },
          { text: "STORE", size: 150, color: "#ffffff" },
        ],
        512,
        700,
        (ctx) => {
          const g = ctx.createLinearGradient(0, 0, 0, 700);
          g.addColorStop(0, "#0b3b1f");
          g.addColorStop(1, "#020403");
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, 512, 700);
        },
      ),
    [fontsReady],
  );

  useFrame(({ clock }) => {
    const v = p.current;
    const on = sstep(5.45, 5.95, v) * (1 - sstep(6.55, 6.95, v));
    rings.current.forEach((r, i) => {
      if (!r) return;
      const t = (clock.elapsedTime * 0.32 + i / 4) % 1;
      r.scale.setScalar(4.6 + t * 20);
      ringMats[i].opacity = on * (1 - t) * 0.9;
      r.visible = on > 0.001;
    });
  });

  return (
    <group>
      {ringMats.map((m, i) => (
        <mesh
          key={i}
          ref={(el) => void (el && (rings.current[i] = el))}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.02, 0]}
          material={m}
        >
          <ringGeometry args={[0.985, 1, 96]} />
        </mesh>
      ))}

      <Reveal
        at={6}
        position={[-3.93, 1.75, 1.35]}
        rotation={[0, Math.PI / 2, 0]}
        scaleFrom={0}
        bounce
        explode={[-0.4, 0.4, 0.8]}
      >
        <mesh position={[0, 0, -0.02]} material={mats.black}>
          <boxGeometry args={[1.38, 1.86, 0.04]} />
        </mesh>
        <mesh>
          <planeGeometry args={[1.28, 1.76]} />
          <meshBasicMaterial map={poster} toneMapped={false} color={new THREE.Color(1.35, 1.35, 1.35)} />
        </mesh>
      </Reveal>

      <During from={5.3} to={6.75}>
        <Reveal at={6} delay={0.08} position={[-12, 0, 0.5]} rotation={[0, 1.05, 0]} from={[0, -9, 0]}>
          <Billboard tex={national} />
        </Reveal>
        <Reveal at={6} delay={0.16} position={[-1.5, 0, -12.5]} rotation={[0, 0.45, 0]} from={[0, -9, 0]}>
          <Billboard tex={international} />
        </Reveal>
      </During>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 07 — Exclusive territory                                             */
/* ------------------------------------------------------------------ */

function hexPoints(r: number, cx = 0, cz = 0) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i + Math.PI / 6;
    return new THREE.Vector3(cx + Math.cos(a) * r, 0, cz + Math.sin(a) * r);
  });
}

function Territory({ fontsReady }: { fontsReady: boolean }) {
  const p = useStory();
  const group = useRef<THREE.Group>(null);
  const edges = useRef<THREE.Group[]>([]);
  const pin = useRef<THREE.Group>(null);
  const pulseMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(GREEN).multiplyScalar(2.5),
        transparent: true,
        toneMapped: false,
        depthWrite: false,
      }),
    [],
  );
  const R = 10;
  const pts = useMemo(() => hexPoints(R), []);
  const fillMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: GREEN,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        toneMapped: false,
      }),
    [],
  );
  const edgeMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(GREEN).multiplyScalar(3),
        toneMapped: false,
        transparent: true,
      }),
    [],
  );
  const otherMat = useMemo(() => new THREE.LineBasicMaterial({ color: "#3f4a42", transparent: true }), []);
  const fillGeo = useMemo(() => {
    const shape = new THREE.Shape(pts.map((v) => new THREE.Vector2(v.x, -v.z)));
    return new THREE.ShapeGeometry(shape);
  }, [pts]);
  const neighbours = useMemo(() => {
    const w = Math.sqrt(3) * R;
    const centres: [number, number][] = [
      [w, 0],
      [-w, 0],
      [w / 2, 1.5 * R],
      [-w / 2, 1.5 * R],
      [w / 2, -1.5 * R],
      [-w / 2, -1.5 * R],
    ];
    return centres.map(([cx, cz]) => {
      const hp = hexPoints(R, cx, cz);
      return new THREE.Line(new THREE.BufferGeometry().setFromPoints([...hp, hp[0]]), otherMat);
    });
  }, [otherMat]);
  const label = useMemo(
    () => labelTexture([{ text: "YOUR EXCLUSIVE TERRITORY", size: 120, color: "#ffffff", spacing: 8 }], 2048, 200),
    [fontsReady],
  );

  useFrame(({ clock }) => {
    const v = p.current;
    const on = sstep(6.45, 6.95, v) * (1 - sstep(7.4, 7.75, v));
    const draw = sstep(6.55, 7.0, v);
    if (group.current) group.current.visible = on > 0.001;
    fillMat.opacity = on * 0.13;
    edgeMat.opacity = on;
    otherMat.opacity = on * 0.8;
    edges.current.forEach((m, i) => {
      if (!m) return;
      const seg = sat(draw * 6 - i);
      m.scale.set(seg, 1, 1);
    });
    if (pin.current) {
      const t = (clock.elapsedTime * 0.6) % 1;
      pin.current.scale.setScalar(5.2 + t * 2.4);
      pulseMat.opacity = on * (1 - t);
    }
  });

  return (
    <group ref={group}>
      <mesh geometry={fillGeo} material={fillMat} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]} />
      {pts.map((a, i) => {
        const b = pts[(i + 1) % 6];
        const len = a.distanceTo(b);
        const ang = Math.atan2(b.z - a.z, b.x - a.x);
        return (
          <group key={i} position={[a.x, 0.06, a.z]} rotation={[0, -ang, 0]}>
            <group ref={(el) => void (el && (edges.current[i] = el))}>
              <mesh position={[len / 2, 0, 0]} material={edgeMat}>
                <boxGeometry args={[len, 0.04, 0.16]} />
              </mesh>
            </group>
          </group>
        );
      })}
      {neighbours.map((line, i) => (
        <primitive key={i} object={line} position={[0, 0.03, 0]} />
      ))}
      <group ref={pin} position={[0, 0.07, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} material={pulseMat}>
          <ringGeometry args={[0.97, 1, 96]} />
        </mesh>
      </group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, -6.9]}>
        <planeGeometry args={[9, 0.88]} />
        <meshBasicMaterial map={label} transparent toneMapped={false} opacity={0.95} />
      </mesh>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 09 — Three days on-site training                                     */
/* ------------------------------------------------------------------ */

function Person({ body, head }: { body: THREE.Material; head: THREE.Material }) {
  return (
    <group>
      <mesh position={[0, 0.72, 0]} material={body} castShadow>
        <capsuleGeometry args={[0.21, 0.92, 6, 16]} />
      </mesh>
      <mesh position={[0, 1.58, 0]} material={head} castShadow>
        <sphereGeometry args={[0.16, 24, 24]} />
      </mesh>
    </group>
  );
}

function Training({ mats, fontsReady }: { mats: Mats; fontsReady: boolean }) {
  const p = useStory();
  const tiles = useRef<THREE.Group[]>([]);
  const tileMats = useMemo(
    () => [0, 1, 2].map(() => new THREE.MeshBasicMaterial({ transparent: true, toneMapped: false, depthWrite: false })),
    [],
  );
  const texes = useMemo(
    () =>
      [1, 2, 3].map((d) =>
        labelTexture(
          [
            { text: `DAY ${d}`, size: 150, color: "#ffffff", spacing: 6 },
            { text: "ON-SITE TRAINING", size: 36, color: GREEN, weight: "700", font: "Inter, sans-serif", spacing: 5 },
          ],
          512,
          300,
          (ctx) => {
            ctx.fillStyle = "rgba(5, 20, 10, 0.82)";
            ctx.beginPath();
            ctx.roundRect(8, 8, 496, 284, 28);
            ctx.fill();
            ctx.strokeStyle = GREEN;
            ctx.lineWidth = 6;
            ctx.stroke();
          },
        ),
      ),
    [fontsReady],
  );
  useEffect(() => {
    tileMats.forEach((m, i) => {
      m.map = texes[i];
      m.needsUpdate = true;
    });
  }, [texes, tileMats]);
  const trainer = useMemo(() => new THREE.MeshStandardMaterial({ color: GREEN, roughness: 0.5 }), []);
  const owner = useMemo(() => new THREE.MeshStandardMaterial({ color: "#f1efe9", roughness: 0.6 }), []);

  useFrame(({ camera, clock }) => {
    const v = p.current;
    const vis = sstep(8.4, 8.7, v) * (1 - sstep(9.45, 9.8, v));
    tiles.current.forEach((g, i) => {
      if (!g) return;
      const lit = sstep(8.5 + i * 0.16, 8.68 + i * 0.16, v);
      g.visible = vis > 0.001;
      g.quaternion.copy(camera.quaternion);
      g.position.y = 4.5 + Math.sin(clock.elapsedTime * 1.4 + i) * 0.05;
      g.scale.setScalar(vis * (0.7 + 0.3 * lit));
      tileMats[i].color.setScalar(vis * (0.35 + lit * 1.15));
    });
  });

  return (
    <group>
      <Reveal at={9} position={[0.9, 0, -0.65]} scaleFrom={0} bounce>
        <Person body={owner} head={mats.stone} />
      </Reveal>
      <Reveal at={9} delay={0.12} position={[3.05, 0, 0.95]} rotation={[0, -0.9, 0]} scaleFrom={0} bounce>
        <Person body={trainer} head={mats.stone} />
      </Reveal>
      {[-0.75, 0.9, 2.55].map((x, i) => (
        <group key={x} ref={(el) => void (el && (tiles.current[i] = el))} position={[x, 4.65, 0.6]}>
          <mesh material={tileMats[i]}>
            <planeGeometry args={[1.3, 0.76]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* 10 — Ongoing updates & support                                       */
/* ------------------------------------------------------------------ */

function Support({ mats }: { mats: Mats }) {
  const p = useStory();
  const ring = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    const v = p.current;
    const on = sstep(9.45, 9.95, v);
    if (!ring.current) return;
    ring.current.visible = on > 0.001;
    ring.current.rotation.y += dt * 0.35;
    ring.current.scale.setScalar(0.6 + on * 0.4);
  });
  return (
    <group ref={ring} position={[0, 2.1, 0]} rotation={[0.22, 0, 0.1]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} material={mats.greenGlow}>
        <torusGeometry args={[6.4, 0.025, 8, 160]} />
      </mesh>
      {[0, 1, 2].map((i) => {
        const a = (i / 3) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * 6.4, 0, Math.sin(a) * 6.4]} material={mats.greenGlow}>
            <sphereGeometry args={[0.13, 20, 20]} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Finale — open sign                                                   */
/* ------------------------------------------------------------------ */

function OpenSign({ fontsReady }: { fontsReady: boolean }) {
  const p = useStory();
  const tex = useMemo(() => neonText("OPEN", 512, 220, 190, 16), [fontsReady]);
  const mat = useMemo(
    () => new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, depthWrite: false }),
    [tex],
  );
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const on = sat((p.current - 10.35) / 0.4);
    const flicker = on > 0 && on < 1 && Math.sin(clock.elapsedTime * 41) > 0.3 ? 0.2 : 1;
    if (mesh.current) mesh.current.visible = on > 0.001;
    mat.color.setScalar(on * flicker * 2.1);
  });
  return (
    <mesh ref={mesh} position={[-3.93, 3.1, 1.35]} rotation={[0, Math.PI / 2, 0]} material={mat}>
      <planeGeometry args={[1.25, 0.54]} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/* Camera                                                               */
/* ------------------------------------------------------------------ */

const KEYS: { pos: V3; target: V3 }[] = [
  { pos: [13, 10, 14], target: [0, 1, 0] }, // 0 shell
  { pos: [1.5, 3.0, 7.4], target: [0.6, 2.6, -3] }, // 1 sign
  { pos: [9.5, 7, 9.5], target: [0, 1.2, 0] }, // 2 interior
  { pos: [5.4, 3.3, 6.6], target: [0.9, 0.9, 0.3] }, // 3 counter
  { pos: [1.6, 2.9, 4.6], target: [-3.4, 1.2, -1.2] }, // 4 fridge
  { pos: [3.7, 2.35, 3.3], target: [2.05, 1.3, 0.25] }, // 5 coffee
  { pos: [19, 13.5, 19], target: [-1, 1.5, -1] }, // 6 advertising
  { pos: [0.01, 36, 7], target: [0, 0, 0] }, // 7 territory
  { pos: [10.86, 8.24, 11.76], target: [-0.9, 1.3, 0] }, // 8 assembly
  { pos: [8.1, 6.0, 11.24], target: [-0.3, 2.85, 0.2] }, // 9 training
  { pos: [13, 9, 13], target: [0, 1.2, 0] }, // 10 support
  { pos: [9.44, 5.66, 11.2], target: [-1.2, 1.4, 0] }, // 11 finale
];

function CameraRig({ layout }: { layout: "wide" | "tall" }) {
  const p = useStory();
  const { camera, size } = useThree();
  const orbit = useRef(0);
  const pos = useMemo(() => new THREE.Vector3(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const a = useMemo(() => new THREE.Vector3(), []);
  const b = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    if (layout === "wide") cam.setViewOffset(size.width, size.height, -size.width * 0.21, 0, size.width, size.height);
    else cam.setViewOffset(size.width, size.height, 0, size.height * 0.15, size.width, size.height);
    cam.updateProjectionMatrix();
    return () => {
      cam.clearViewOffset();
    };
  }, [camera, size, layout]);

  useFrame(({ clock }, dt) => {
    const v = Math.min(KEYS.length - 1, Math.max(0, p.current));
    const i = Math.min(KEYS.length - 2, Math.floor(v));
    const f = sstep(0.2, 0.8, v - i);
    pos.fromArray(KEYS[i].pos).lerp(b.fromArray(KEYS[i + 1].pos), f);
    target.fromArray(KEYS[i].target).lerp(a.fromArray(KEYS[i + 1].target), f);

    const aspect = size.width / size.height;
    const k = layout === "tall" ? 1 + Math.max(0, 1 - aspect) * 1.3 : 1;
    pos.sub(target).multiplyScalar(k);

    orbit.current += dt;
    pos.applyAxisAngle(THREE.Object3D.DEFAULT_UP, sstep(10.3, 10.9, v) * Math.sin(orbit.current * 0.22) * 0.32);
    pos.add(target);

    pos.x += Math.sin(clock.elapsedTime * 0.35) * 0.08;
    pos.y += Math.sin(clock.elapsedTime * 0.27) * 0.05;

    camera.position.copy(pos);
    camera.lookAt(target);
  });
  return null;
}

function Driver({ target }: { target: MutableRefObject<number> }) {
  const p = useStory();
  useFrame((_, dt) => {
    p.current = THREE.MathUtils.damp(p.current, target.current, 4.2, Math.min(dt, 0.25));
  });
  return null;
}

function Lights({ shadows }: { shadows: boolean }) {
  const p = useStory();
  const amb = useRef<THREE.AmbientLight>(null);
  const key = useRef<THREE.DirectionalLight>(null);
  useFrame(() => {
    const v = p.current;
    const lit = sstep(0.2, 2.2, v) + 0.35 * sstep(10.4, 11, v);
    if (amb.current) amb.current.intensity = 0.18 + 0.25 * lit;
    if (key.current) key.current.intensity = 0.45 + 0.85 * lit;
  });
  return (
    <>
      <ambientLight ref={amb} />
      <hemisphereLight args={["#dfffe9", "#050605", 0.25]} />
      <directionalLight
        ref={key}
        position={[7, 11, 6]}
        castShadow={shadows}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={7}
        shadow-camera-bottom={-7}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-bias={-0.0004}
      />
      <pointLight position={[-3, 3.6, -2.4]} color={GREEN} intensity={3} distance={6} decay={2} />
    </>
  );
}

function Scene({ target, layout }: { target: MutableRefObject<number>; layout: "wide" | "tall" }) {
  const mats = useMaterials();
  const fontsReady = useFontsReady();
  const shadows = layout === "wide";
  return (
    <>
      <Driver target={target} />
      <CameraRig layout={layout} />
      <color attach="background" args={["#030403"]} />
      <fog attach="fog" args={["#030403", 45, 95]} />
      <Lights shadows={shadows} />
      <Environment resolution={128} frames={1} environmentIntensity={0.45}>
        <Lightformer form="rect" intensity={2} position={[0, 6, 2]} scale={[10, 4, 1]} rotation={[Math.PI / 2, 0, 0]} />
        <Lightformer
          form="rect"
          intensity={1.2}
          color="#bbf7d0"
          position={[-6, 3, 4]}
          scale={[6, 3, 1]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Lightformer
          form="rect"
          intensity={1}
          position={[6, 3, -4]}
          scale={[6, 3, 1]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </Environment>

      <Ground />
      <Shell mats={mats} />
      <NeonSign mats={mats} fontsReady={fontsReady} />
      <Interior mats={mats} />
      <Counter mats={mats} />
      <Fridge mats={mats} />
      <CoffeeMachine mats={mats} />
      <Advertising mats={mats} fontsReady={fontsReady} />
      <Territory fontsReady={fontsReady} />
      <Training mats={mats} fontsReady={fontsReady} />
      <Support mats={mats} />
      <OpenSign fontsReady={fontsReady} />

      <EffectComposer multisampling={layout === "wide" ? 4 : 0}>
        <Bloom mipmapBlur intensity={0.9} luminanceThreshold={1} luminanceSmoothing={0.25} />
        <Vignette eskil={false} offset={0.25} darkness={0.75} />
      </EffectComposer>
    </>
  );
}

export default function StoreBuild3D({ progress, active }: { progress: MutableRefObject<number>; active: boolean }) {
  const smoothed = useRef(progress.current);
  const [layout, setLayout] = useState<"wide" | "tall">(() =>
    typeof window !== "undefined" && window.innerWidth >= 1024 ? "wide" : "tall",
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setLayout(mq.matches ? "wide" : "tall");
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      shadows={layout === "wide" ? "percentage" : false}
      dpr={layout === "wide" ? [1, 1.75] : [1, 1.5]}
      camera={{ fov: 32, near: 0.1, far: 200, position: [13, 10, 14] }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <StoryCtx.Provider value={{ p: smoothed }}>
        <Scene target={progress} layout={layout} />
      </StoryCtx.Provider>
    </Canvas>
  );
}
