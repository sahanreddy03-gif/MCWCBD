import { useEffect, useRef, useState, type ComponentType, type PointerEvent, type SVGProps } from "react";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Coffee,
  Cookie,
  CupSoda,
  Gem,
  Gift,
  GraduationCap,
  Instagram,
  MapPin,
  MapPinned,
  Megaphone,
  Plus,
  RefreshCw,
  Refrigerator,
  ShieldCheck,
  Shirt,
  Sofa,
  Sparkles,
  Stamp,
  Wrench,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { MCW_STORES } from "@/lib/locations";

type Icon = ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;

const EASE = [0.22, 1, 0.36, 1] as const;
const PRICE = 20000;
const PRICE_LABEL = "€20,000";
const INSTAGRAM_URL = "https://www.instagram.com/mcwcbdrelax";
const MAIN_STORE = MCW_STORES[0];

function CounterIcon(props: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5.5 5.5h13L20.5 10h-17z" />
      <rect x="3.5" y="10" width="17" height="10" rx="1" />
      <path d="M3.5 14.5h17" />
      <path d="M9.5 17.25h5" />
      <path d="M8 7.75l1-1.25M12.5 7.75l1-1.25" />
    </svg>
  );
}

const INCLUSIONS: { title: string; desc: string; group: string; icon: Icon }[] = [
  {
    title: "Trademark rights",
    desc: "The right to use the “Weed CBD Relax Store” trademark — the name above your door from day one.",
    group: "Brand",
    icon: Stamp,
  },
  {
    title: "Interior & decorative design",
    desc: "Interior furnishings and decorative design, giving your store the complete, finished look of the concept.",
    group: "Store fit-out",
    icon: Sofa,
  },
  {
    title: "Retail counter with glass top",
    desc: "A retail counter with a glass countertop — your point of sale and product display in one.",
    group: "Store fit-out",
    icon: CounterIcon,
  },
  {
    title: "Beverage refrigerator",
    desc: "A refrigerator to keep drinks chilled and on show for customers.",
    group: "Equipment",
    icon: Refrigerator,
  },
  {
    title: "Coffee machine",
    desc: "A coffee machine, so your store can welcome customers with a fresh cup.",
    group: "Equipment",
    icon: Coffee,
  },
  {
    title: "National & international advertising",
    desc: "Your store is backed by advertising at both national and international level.",
    group: "Brand",
    icon: Megaphone,
  },
  {
    title: "Exclusive territory",
    desc: "Exclusive rights within a designated geographical area — your patch is yours alone.",
    group: "Brand",
    icon: MapPinned,
  },
  {
    title: "Free assembly & installation",
    desc: "The full fit-out is assembled and installed for you, free of charge.",
    group: "Store fit-out",
    icon: Wrench,
  },
  {
    title: "Three days on-site training",
    desc: "Three days of hands-on training, delivered in person at your store.",
    group: "Training & support",
    icon: GraduationCap,
  },
  {
    title: "Ongoing updates & support",
    desc: "Continuing updates and support for the development of the business concept, long after opening day.",
    group: "Training & support",
    icon: RefreshCw,
  },
];

const PACKAGE_SUMMARY = [
  "“Weed CBD Relax Store” trademark",
  "Full interior fit-out & counter",
  "Refrigerator & coffee machine",
  "Exclusive geographical territory",
  "3 days on-site training",
  "Advertising & ongoing support",
];

const STEPS = [
  { title: "Enquire", desc: "Tell us about yourself and the area you have in mind." },
  { title: "Secure your territory", desc: "Agree the designated geographical area that will be exclusively yours." },
  { title: "Fit-out", desc: "Furnishings, counter, refrigerator and coffee machine — assembled and installed free of charge." },
  { title: "Training", desc: "Three days of on-site training to get you and your store ready." },
  { title: "Open & grow", desc: "Open your doors with advertising behind you and ongoing support as the concept develops." },
];

const RANGE: { name: string; icon: Icon }[] = [
  { name: "Food", icon: Cookie },
  { name: "Beverages", icon: CupSoda },
  { name: "Cosmetics", icon: Sparkles },
  { name: "Clothing", icon: Shirt },
  { name: "Souvenirs", icon: Gift },
  { name: "Accessories", icon: Gem },
];

const LEGAL_NOTE =
  "This product range does not automatically mean that a franchise is authorised to sell cannabis containing THC. Only products legally permitted under Maltese law and regulations will be offered for sale.";

const FAQS = [
  {
    q: "How much does the franchise cost?",
    a: `The franchise package is ${PRICE_LABEL}.`,
  },
  {
    q: `What does the ${PRICE_LABEL} include?`,
    a: "The right to use the “Weed CBD Relax Store” trademark; interior furnishings and decorative design; a retail counter with a glass countertop; a beverage refrigerator; a coffee machine; national and international advertising; exclusive rights within a designated geographical area; free assembly and installation; three days of on-site training; and ongoing updates and support for the development of the business concept.",
  },
  {
    q: "Is my territory exclusive?",
    a: "Yes. The franchise includes exclusive rights within a designated geographical area.",
  },
  {
    q: "Who sets up the store?",
    a: "Assembly and installation of the store fit-out are included, free of charge.",
  },
  {
    q: "What training and support do I get?",
    a: "Three days of on-site training, followed by ongoing updates and support for the development of the business concept.",
  },
  {
    q: "What will the store sell?",
    a: "The range includes food, beverages, cosmetics, clothing, souvenirs and accessories.",
  },
  {
    q: "Can a franchise store sell cannabis containing THC?",
    a: LEGAL_NOTE,
  },
];

const PAGE_SCHEMA = [
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mcwcbd.com/" },
      { "@type": "ListItem", position: 2, name: "Franchise", item: "https://mcwcbd.com/franchise" },
    ],
  },
  {
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-green-400">
      <span className="h-px w-8 bg-green-400/70" />
      {children}
    </p>
  );
}

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function PriceCounter({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? PRICE : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, PRICE, {
      duration: 1.8,
      ease: EASE,
      delay: 0.5,
      onUpdate: (v) => setValue(Math.round(v / 100) * 100),
    });
    return () => controls.stop();
  }, [inView, reduce]);

  return (
    <span ref={ref} className={className} aria-label={PRICE_LABEL}>
      €{value.toLocaleString("en-GB")}
    </span>
  );
}

function PackageCard() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 140, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-9, 9]), { stiffness: 140, damping: 18 });
  const glareX = useTransform(mx, (v) => `${v * 100}%`);
  const glareY = useTransform(my, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.10), transparent 45%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
      className="[perspective:1200px] w-full max-w-[440px] mx-auto"
    >
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-[22px] p-px overflow-hidden fr-card-shadow"
      >
        <div className="absolute inset-[-60%] fr-spin" aria-hidden>
          <div className="h-full w-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,197,94,0.9)_40deg,transparent_110deg,transparent_200deg,rgba(250,204,21,0.55)_240deg,transparent_300deg)]" />
        </div>

        <div className="relative rounded-[21px] bg-[#070907]/95 backdrop-blur-xl">
          <motion.div className="pointer-events-none absolute inset-0 rounded-[21px]" style={{ background: glare }} />

          <div className="relative px-7 pt-7 pb-6 sm:px-8 sm:pt-8">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
              <span>Franchise package</span>
              <span className="flex items-center gap-1.5 text-green-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>
                Malta
              </span>
            </div>

            <PriceCounter className="mt-6 block font-bebas text-[5.25rem] sm:text-[6.5rem] leading-[0.8] tracking-tight text-white tabular-nums" />
            <p className="mt-3 text-sm text-gray-400">Brand, fit-out, equipment, training and support.</p>
          </div>

          <div className="relative mx-7 border-t border-dashed border-white/15 sm:mx-8" aria-hidden />

          <ul className="relative space-y-3 px-7 pt-6 pb-7 sm:px-8 sm:pb-8">
            {PACKAGE_SUMMARY.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.9 + i * 0.07 }}
                className="flex items-center gap-3 text-[13px] text-gray-200"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="relative flex items-center justify-between border-t border-white/[0.06] px-7 py-4 sm:px-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">Assembly & installation</span>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-green-400">Free</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const backdropY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const lines = [
    <>Open your own</>,
    <>
      CBD <span className="text-green-400">Relax</span>
    </>,
    <>Store.</>,
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y: backdropY }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,197,94,0.22),transparent)] blur-2xl" />
        <div className="absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(250,204,21,0.08),transparent)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] overflow-hidden [perspective:640px]">
          <div className="fr-grid absolute inset-x-[-60%] bottom-0 h-[160%] origin-bottom" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <div className="fr-grain absolute inset-0 opacity-[0.07]" />
      </motion.div>

      <div
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-16 pb-20 sm:px-8 md:pt-24 lg:min-h-[calc(100svh-96px)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pt-16 lg:pb-24"
      >
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <Eyebrow>Franchise opportunity · Malta</Eyebrow>
          </motion.div>

          <h1 className="mt-7 font-bebas uppercase leading-[0.86] tracking-tight text-white text-[clamp(3.6rem,10.5vw,9.25rem)]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.04em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: EASE, delay: 0.12 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg"
          >
            A ready-to-open store, delivered as one package — the trademark, the fit-out, the equipment, an exclusive
            territory, on-site training and ongoing support. <span className="text-white">All for {PRICE_LABEL}.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.68 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#enquire"
              className="group inline-flex items-center justify-center gap-3 bg-green-500 px-6 py-4 text-xs font-black sm:px-8 uppercase tracking-[0.16em] sm:tracking-[0.22em] text-black transition-colors hover:bg-green-400"
            >
              Enquire about a territory
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#included"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-4 text-xs font-black sm:px-8 uppercase tracking-[0.16em] sm:tracking-[0.22em] text-white transition-colors hover:border-green-400 hover:text-green-400"
            >
              See what's included
            </a>
          </motion.div>
        </div>

        <PackageCard />
      </div>
    </section>
  );
}

const FACTS = [
  { value: PRICE_LABEL, label: "Franchise package" },
  { value: "10", label: "Inclusions in the package" },
  { value: "3 days", label: "On-site training" },
  { value: "Exclusive", label: "Territory rights" },
];

function FactStrip() {
  return (
    <section className="relative border-y border-white/[0.07] bg-[#050505]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {FACTS.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            className={`px-5 py-8 sm:px-8 sm:py-10 ${i % 2 === 1 ? "border-l border-white/[0.07]" : ""} ${i > 1 ? "border-t border-white/[0.07] lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
          >
            <p className="font-bebas text-4xl leading-none tracking-wide text-white sm:text-5xl">{f.value}</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">{f.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Included() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = INCLUSIONS[active];
  const ActiveIcon = current.icon;

  return (
    <section id="included" className="relative scroll-mt-28 px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-6 font-bebas text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
              Everything you need
              <br />
              to <span className="text-green-400">open your doors.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:pt-14">
            <p className="max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
              Ten things come with the {PRICE_LABEL} package — from the name above the door to the coffee machine
              behind the counter.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="hidden lg:block">
            <div className="sticky top-36">
              <div className="relative aspect-square w-full overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#060806]">
                <div className="absolute inset-0 fr-dots opacity-60" aria-hidden />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,197,94,0.16),transparent_60%)]" aria-hidden />

                <div className="absolute left-8 right-8 top-7 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={current.group}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="text-green-400"
                    >
                      {current.group}
                    </motion.span>
                  </AnimatePresence>
                  <span className="tabular-nums text-gray-500">
                    {String(active + 1).padStart(2, "0")} / {INCLUSIONS.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.span
                    key={`n-${active}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="fr-outline pointer-events-none absolute -bottom-10 -right-2 font-bebas text-[17rem] leading-none"
                    aria-hidden
                  >
                    {String(active + 1).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex h-48 w-48 items-center justify-center">
                    <svg className="fr-spin-slow absolute inset-0 h-full w-full text-green-400/40" viewBox="0 0 100 100" aria-hidden>
                      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1.5 3" />
                    </svg>
                    <div className="absolute inset-6 rounded-full border border-green-400/20 bg-green-500/[0.06] shadow-[0_0_80px_rgba(34,197,94,0.25)]" />
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`i-${active}`}
                        initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.3, rotate: 8 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="relative text-green-400"
                      >
                        <ActiveIcon className="h-16 w-16" strokeWidth={1.1} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="absolute bottom-7 left-8 right-8">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`t-${active}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="font-bebas text-3xl tracking-wide text-white"
                    >
                      {current.title}
                    </motion.p>
                  </AnimatePresence>
                  <div className="mt-4 flex gap-1.5">
                    {INCLUSIONS.map((_, i) => (
                      <span key={i} className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
                        <motion.span
                          className="absolute inset-0 origin-left bg-green-400"
                          initial={false}
                          animate={{ scaleX: i <= active ? 1 : 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ol className="border-t border-white/[0.08]">
            {INCLUSIONS.map((item, i) => {
              const ItemIcon = item.icon;
              const isActive = i === active;
              return (
                <li
                  key={item.title}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  className={`group relative border-b border-white/[0.08] py-8 transition-opacity duration-500 sm:py-10 ${isActive ? "lg:opacity-100" : "lg:opacity-35"}`}
                >
                  <span
                    className={`absolute left-0 top-[-1px] h-px bg-green-400 transition-all duration-700 ${isActive ? "w-full" : "w-0"}`}
                    aria-hidden
                  />
                  <div className="flex gap-5 sm:gap-8">
                    <span className="w-9 shrink-0 pt-1 font-bebas text-2xl tabular-nums text-green-400 sm:w-12 sm:text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">{item.group}</p>
                          <h3 className="mt-2 font-bebas text-3xl uppercase leading-none tracking-wide text-white sm:text-[2.6rem]">
                            {item.title}
                          </h3>
                        </div>
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-green-400 lg:hidden">
                          <ItemIcon className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                      </div>
                      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-5 py-24 sm:px-8 md:py-36">
      <div className="pointer-events-none absolute inset-0 fr-dots opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>From enquiry to opening day</Eyebrow>
          <h2 className="mt-6 font-bebas text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
            Your road to <span className="text-green-400">opening.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 md:mt-24">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 lg:left-0 lg:right-0 lg:top-[19px] lg:bottom-auto lg:h-px lg:w-auto" aria-hidden />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute left-[19px] top-2 bottom-2 w-px origin-top bg-green-400 lg:hidden"
            aria-hidden
          />
          <motion.div
            style={{ scaleX: progress }}
            className="absolute left-0 right-0 top-[19px] hidden h-px origin-left bg-green-400 lg:block"
            aria-hidden
          />

          <ol className="relative grid gap-12 lg:grid-cols-5 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                className="relative flex gap-6 lg:block"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-400/50 bg-black font-bebas text-lg text-green-400 shadow-[0_0_24px_rgba(34,197,94,0.25)]">
                  {i + 1}
                </span>
                <div className="lg:mt-8">
                  <h3 className="font-bebas text-3xl uppercase leading-none tracking-wide text-white">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-400">{step.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Range() {
  const words = [...RANGE, ...RANGE];

  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] py-24 md:py-36">
      <div className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>The product range</Eyebrow>
            <h2 className="mt-6 font-bebas text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
              What your store <span className="text-green-400">sells.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:pt-14">
            <p className="max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg">
              A broad lifestyle range built for everyday customers and visitors alike — food, beverages, cosmetics,
              clothing, souvenirs and accessories.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-white/[0.07] py-6 md:mt-20" aria-hidden>
        <div className="flex w-max animate-marquee-slow">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {words.map((w, i) => (
                <span key={`${k}-${i}`} className="flex items-center font-bebas text-6xl uppercase tracking-wide md:text-8xl">
                  <span className={i % 2 === 0 ? "text-white" : "fr-outline-soft"}>{w.name}</span>
                  <span className="mx-8 text-green-400 md:mx-12">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 px-5 sm:px-8 md:mt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-3 xl:grid-cols-6">
          {RANGE.map(({ name, icon: RangeIcon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.06 }}
              className="group relative flex aspect-[4/3] flex-col justify-between bg-[#060606] p-6 transition-colors duration-500 hover:bg-[#0a120c] sm:p-7 xl:aspect-[3/4]"
            >
              <span className="text-[10px] font-bold tabular-nums tracking-[0.3em] text-gray-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <RangeIcon
                className="h-9 w-9 text-green-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                strokeWidth={1.25}
              />
              <span className="font-bebas text-3xl uppercase tracking-wide text-white">{name}</span>
            </motion.div>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-7xl">
          <div className="relative overflow-hidden rounded-[22px] border border-green-500/25 bg-gradient-to-br from-green-950/60 via-[#060806] to-[#060806] p-7 sm:p-10">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" aria-hidden />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-green-400/40 bg-green-500/10 text-green-400">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-400">Legal by design</p>
                <h3 className="mt-2 font-bebas text-3xl uppercase tracking-wide text-white sm:text-4xl">
                  A clear line on THC
                </h3>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-gray-300">
                  This product range does not automatically mean that a franchise is authorised to sell cannabis
                  containing THC.{" "}
                  <span className="text-white">
                    Only products legally permitted under Maltese law and regulations will be offered for sale.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative border-t border-white/[0.07] bg-[#050505] px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-36">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 font-bebas text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-7xl">
              Franchise <span className="text-green-400">FAQ.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-gray-400">
              The essentials, answered. Anything else, ask us directly — we're happy to talk it through.
            </p>
          </div>
        </Reveal>

        <div className="border-t border-white/[0.08]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-white/[0.08]">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left font-sans sm:py-7"
                  >
                    <span className={`text-base font-semibold transition-colors sm:text-lg ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-45 border-green-400 bg-green-400 text-black" : "border-white/15 text-gray-300 group-hover:border-green-400 group-hover:text-green-400"}`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-12 text-[15px] leading-relaxed text-gray-400">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Enquire() {
  return (
    <section id="enquire" className="relative scroll-mt-28 overflow-hidden px-5 pt-24 pb-8 sm:px-8 md:pt-36">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#050705]">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(34,197,94,0.25),transparent)] blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden [perspective:640px]">
            <div className="fr-grid absolute inset-x-[-60%] bottom-0 h-[160%] origin-bottom opacity-60" />
          </div>
          <div className="fr-grain absolute inset-0 opacity-[0.06]" />
        </div>

        <div className="relative px-5 py-16 text-center sm:px-12 md:py-24">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-green-400">Territories are exclusive</p>
            <h2 className="mx-auto mt-6 max-w-4xl font-bebas text-6xl uppercase leading-[0.86] tracking-tight text-white sm:text-8xl md:text-[8.5rem]">
              Claim your <span className="text-green-400 fr-text-glow">territory.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Each franchise comes with exclusive rights within a designated geographical area. Start the conversation
              and find out whether yours is still available.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-green-500 px-6 py-4 text-xs font-black sm:px-8 uppercase tracking-[0.16em] sm:tracking-[0.22em] text-black transition-colors hover:bg-green-400"
            >
              <Instagram className="h-4 w-4" />
              <span className="sm:hidden">Message on Instagram</span>
              <span className="hidden sm:inline">Message us on Instagram</span>
              <ArrowUpRight className="hidden h-4 w-4 sm:block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={MAIN_STORE.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-4 text-xs font-black sm:px-8 uppercase tracking-[0.16em] sm:tracking-[0.22em] text-white transition-colors hover:border-green-400 hover:text-green-400"
            >
              <MapPin className="h-4 w-4" />
              <span className="sm:hidden">Visit us in {MAIN_STORE.name}</span>
              <span className="hidden sm:inline">Visit our {MAIN_STORE.name} branch</span>
            </a>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 flex flex-col items-center justify-center gap-3 text-xs text-gray-500 sm:flex-row sm:gap-8">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-green-500" />
              {MAIN_STORE.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-green-500" />
              Open daily 12:00 – 22:00
            </span>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-1 border-t border-white/[0.08] sm:grid-cols-3">
          {[
            ["Franchise package", PRICE_LABEL],
            ["On-site training", "3 days"],
            ["Assembly & installation", "Free"],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`flex items-center justify-between px-6 py-5 sm:px-8 ${i > 0 ? "border-t border-white/[0.08] sm:border-l sm:border-t-0" : ""}`}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">{label}</span>
              <span className="font-bebas text-2xl tracking-wide text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Franchise() {
  return (
    <MotionConfig reducedMotion="user">
      <SEO
        title="CBD Store Franchise in Malta — €20,000 Package"
        description="Open your own CBD Relax Store in Malta. The €20,000 franchise package includes trademark rights, full store fit-out and equipment, an exclusive territory, 3 days of on-site training and ongoing support."
        canonical="/franchise"
        schema={PAGE_SCHEMA}
      />
      <div className="relative bg-black text-white">
        <Hero />
        <FactStrip />
        <Included />
        <Journey />
        <Range />
        <Faq />
        <Enquire />
      </div>

      <style>{`
        .fr-grid {
          background-image:
            linear-gradient(rgba(34,197,94,0.34) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.34) 1px, transparent 1px);
          background-size: 72px 72px;
          transform: rotateX(64deg);
          -webkit-mask-image: linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 35%, transparent 80%);
          mask-image: linear-gradient(to top, #000 0%, rgba(0,0,0,0.55) 35%, transparent 80%);
          animation: frGridMove 3.2s linear infinite;
        }
        @keyframes frGridMove { from { background-position: 0 0; } to { background-position: 0 72px; } }

        .fr-grain {
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }
        .fr-dots {
          background-image: radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px);
          background-size: 22px 22px;
          -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
          mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
        }
        .fr-outline { color: transparent; -webkit-text-stroke: 1px rgba(34,197,94,0.22); }
        .fr-outline-soft { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.35); }
        .fr-text-glow { text-shadow: 0 0 40px rgba(34,197,94,0.45); }
        .fr-card-shadow { box-shadow: 0 40px 120px -20px rgba(34,197,94,0.25), 0 20px 60px rgba(0,0,0,0.6); }

        .fr-spin { animation: frSpin 7s linear infinite; }
        .fr-spin-slow { animation: frSpin 40s linear infinite; }
        @keyframes frSpin { to { transform: rotate(360deg); } }

        @media (prefers-reduced-motion: reduce) {
          .fr-grid, .fr-spin, .fr-spin-slow { animation: none; }
        }
      `}</style>
    </MotionConfig>
  );
}
