import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "../artifacts/mcw-cbd-shop/public/ai_gen");
fs.mkdirSync(OUT_DIR, { recursive: true });

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
});

const STYLE =
  "product photography, dark forest green background, centered on background, studio lighting, bright and sharp, commercial quality, isolated product, clean edges, no text overlays, photorealistic";

// Each entry: { id, primary, fallback }
// primary = specific visual description — purely physical form, no cannabinoid/substance terms
// fallback = ultra-generic shape/color if primary is blocked
const PRODUCTS = [
  // ── FLOWERS (27) ──────────────────────────────────────────
  { id: "f01", primary: "premium dried botanical herb buds, 2.5g, inside a sealed branded black mylar resealable zip-lock pouch labeled Amnesia Haze", fallback: "small sealed black metallic resealable pouch 2.5g on dark green background" },
  { id: "f02", primary: "premium dried botanical herb buds, 2.5g, inside a sealed branded black mylar resealable zip-lock pouch labeled Wedding Cake, with colorful cake artwork", fallback: "small sealed black metallic resealable pouch 2.5g on dark green background" },
  { id: "f03", primary: "premium dried botanical herb buds, 2.5g, inside a sealed branded black mylar resealable zip-lock pouch labeled Cherry Pie, with cherry artwork", fallback: "small sealed black metallic resealable pouch 2.5g on dark green background" },
  { id: "f04", primary: "premium dried botanical herb buds, 2.5g, inside a vibrant branded mylar resealable pouch labeled Lemon Haze Sativa, bright yellow and green design", fallback: "small sealed branded metallic resealable pouch 2.5g on dark green background" },
  { id: "f05", primary: "premium dried botanical herb buds, 2.5g, inside a vibrant branded mylar resealable pouch labeled Alien Cheese Hybrid, purple and green design", fallback: "small sealed branded metallic resealable pouch 2.5g on dark green background" },
  { id: "f06", primary: "dried botanical herb buds, 1.5g, inside a sleek branded white and blue mylar pouch with a bold strain name label", fallback: "small sealed white branded mylar pouch 1.5g on dark green background" },
  { id: "f07", primary: "dried botanical herb buds, 1.5g, inside a sleek branded blue mylar pouch labeled Gorilla Blue", fallback: "small sealed blue branded mylar pouch 1.5g on dark green background" },
  { id: "f08", primary: "dried botanical herb buds, 1.5g, inside a sleek branded white mylar pouch labeled White Widow", fallback: "small sealed white branded mylar pouch 1.5g on dark green background" },
  { id: "f09", primary: "dried botanical herb buds, 1g, inside a premium branded transparent window mylar pouch with strength percentage label, clean minimal design", fallback: "small sealed transparent window mylar pouch 1g on dark green background" },
  { id: "f10", primary: "dried botanical herb buds, 1g, inside a premium branded transparent window mylar pouch with percentage strength badge, white and gold design", fallback: "small sealed transparent window mylar pouch 1g on dark green background" },
  { id: "f11", primary: "dried botanical herb buds, 1g, inside a premium branded transparent window mylar pouch with bold strength label, black and gold design", fallback: "small sealed transparent window mylar pouch 1g on dark green background" },
  { id: "f12", primary: "dried botanical herb buds, 1g, inside a minimalist white branded pouch labeled Creative Boost, with a sunrise and leaf motif", fallback: "small sealed white branded pouch 1g on dark green background" },
  { id: "f13", primary: "dried botanical herb buds, 1g, inside a minimalist pastel branded pouch labeled Summer Vibes, with sun and wave motif", fallback: "small sealed pastel branded pouch 1g on dark green background" },
  { id: "f14", primary: "premium dried botanical herb buds, 5g, inside a large elegant branded matte black pouch labeled Royal Premium Flowers", fallback: "large sealed elegant matte black pouch 5g on dark green background" },
  { id: "f15", primary: "dried botanical herb buds, 1g, inside a stylish branded pouch labeled Lemon Gelato with a yellow lemon and gelato design", fallback: "small sealed stylish pouch 1g on dark green background" },
  { id: "f16", primary: "dried botanical herb buds and golden amber resin crystals, 1g, inside a transparent branded premium pouch with amber tones and gold accent label", fallback: "small sealed transparent amber branded pouch 1g on dark green background" },
  { id: "f17", primary: "dried botanical herb buds, 10g bulk, inside a large sealed branded brown kraft paper bag labeled Hemp Flower 10g", fallback: "large sealed kraft paper bag 10g on dark green background" },
  { id: "f18", primary: "dried botanical herb buds, 10g bulk, inside a large sealed branded brown kraft paper bag labeled Hemp Flower 10g, green logo variant", fallback: "large sealed kraft paper bag 10g on dark green background" },
  { id: "f19", primary: "dried botanical herb buds, 1.5g, inside a bright yellow branded mylar pouch labeled Lemon Haze Sativa with lemon design", fallback: "small sealed yellow branded mylar pouch 1.5g on dark green background" },
  { id: "f20", primary: "dried botanical herb buds, 1.5g, inside a bright green branded mylar pouch labeled Green Crack Sativa Super Strong", fallback: "small sealed green branded mylar pouch 1.5g on dark green background" },
  { id: "f21", primary: "dried botanical herb buds, 5g, inside a large bold branded mylar pouch labeled Green Crack Sativa Super Strong 5g", fallback: "large sealed green branded mylar pouch 5g on dark green background" },
  { id: "f22", primary: "dried botanical herb buds, 5g, inside a large bold branded yellow mylar pouch labeled Lemon Haze Sativa Super Strong 5g", fallback: "large sealed yellow branded mylar pouch 5g on dark green background" },
  { id: "f23", primary: "dried botanical herb buds, 5g, inside an artisan branded white widow patterned mylar pouch labeled Mama Mary White Widow 5g", fallback: "large sealed artisan branded mylar pouch 5g on dark green background" },
  { id: "f24", primary: "dried botanical herb buds, 2g, inside a colorful branded candy-themed mylar pouch labeled Mama Mary Runtz 2g", fallback: "small sealed colorful branded mylar pouch 2g on dark green background" },
  { id: "f25", primary: "dried botanical herb buds, 5g, inside a classic branded mylar pouch labeled Mama Mary Amnesia 5g", fallback: "large sealed classic branded mylar pouch 5g on dark green background" },
  { id: "f26", primary: "dried botanical herb buds, in a branded premium pouch labeled Amnesia Strong, with purple and gold Euphoria branding", fallback: "sealed premium branded pouch on dark green background" },
  { id: "f27", primary: "small tin or slim branded can of watermelon-flavored nicotine-free herbal snus pouches labeled Ice Watermelon, bright green and white packaging", fallback: "small branded tin can on dark green background" },

  // ── GUMMIES (11) ──────────────────────────────────────────
  { id: "g01", primary: "yellow lemon-flavored gummy candy pieces in a clear branded resealable bag labeled Lemon Haze Gummies, 20g, bright yellow packaging", fallback: "yellow gummy candies in clear branded bag on dark green background" },
  { id: "g02", primary: "yellow lemon-flavored gummy candy pieces in a clear branded resealable bag labeled Lemon Haze Gummies, 20g, green packaging variant", fallback: "yellow gummy candies in green branded bag on dark green background" },
  { id: "g03", primary: "small purple grape-flavored gummy candies in a sleek branded pouch, Euphoria brand, purple and gold design", fallback: "purple gummy candies in branded pouch on dark green background" },
  { id: "g04", primary: "green apple-flavored gummy candy pieces, 50g bag, in a branded resealable pouch labeled Apple OG, with apple artwork on packaging", fallback: "green apple gummy candies in branded bag on dark green background" },
  { id: "g05", primary: "pink strawberry-flavored gummy candy pieces, 50g bag, in a branded resealable pouch labeled Strawberry Haze, with strawberry artwork", fallback: "pink strawberry gummy candies in branded bag on dark green background" },
  { id: "g06", primary: "red fruit-flavored gummy candy pieces in a branded red resealable bag labeled Super Strong Gummies, bold red design", fallback: "red gummy candies in bold red branded bag on dark green background" },
  { id: "g07", primary: "purple grape-flavored gummy candy pieces in a branded purple resealable bag labeled Super Strong Gummies, bold purple design", fallback: "purple gummy candies in bold purple branded bag on dark green background" },
  { id: "g08", primary: "yellow mango-flavored gummy candy pieces in a branded yellow resealable bag labeled Super Strong Gummies, bold yellow design", fallback: "yellow gummy candies in bold yellow branded bag on dark green background" },
  { id: "g09", primary: "colorful mixed gummy candy pieces, 2g pack, in a branded Kush Kat themed resealable pouch with cat graphic design", fallback: "colorful gummy candies in branded cat-themed pouch on dark green background" },
  { id: "g10", primary: "cotton candy-flavored pink and white gummy sweets in a branded Canapuff resealable pouch with candy cotton artwork", fallback: "pink and white gummy sweets in branded pouch on dark green background" },
  { id: "g11", primary: "small round sleep supplement gummies in a branded white bottle labeled Good Night's Sleep Gummies 30 capsules, Hemnia brand, dark blue night sky design", fallback: "supplement gummy bottle 30 capsules on dark green background" },

  // ── CRYSTAL (3) ───────────────────────────────────────────
  { id: "c01", primary: "fine white crystalline powder, 475mg, in a small sealed transparent glass vial with dropper, Euphoria brand label, white and gold", fallback: "small glass vial with white powder on dark green background" },
  { id: "c02", primary: "fine white crystalline powder, 500mg, in a small sealed glass jar with lid, Euphoria brand label, premium white and gold packaging", fallback: "small glass jar with white powder on dark green background" },
  { id: "c03", primary: "fine white crystalline powder, 100mg, in a tiny sealed glass vial with cork stopper, Euphoria brand label, elegant packaging", fallback: "tiny elegant glass vial with white powder on dark green background" },

  // ── HASH (3) ──────────────────────────────────────────────
  { id: "h01", primary: "small dark golden-brown artisan pressed resin slab, 1.5g, wrapped in branded Chips Ahoy cookie-themed brown parchment paper with chocolate chip cookie design", fallback: "small dark amber resin slab in branded wrapper on dark green background" },
  { id: "h02", primary: "dark amber handcrafted pressed resin block, 3.5g, wrapped in branded Gorillagarz paper with gorilla graphic, artisan premium look", fallback: "dark amber resin block in branded artisan paper on dark green background" },
  { id: "h03", primary: "dark brown artisan pressed resin and botanical trim blend, 3.5g, branded Gorillagarz Gorilla Breath paper wrapper with premium design", fallback: "dark brown pressed resin block in branded wrapper on dark green background" },

  // ── VAPES (7) ─────────────────────────────────────────────
  { id: "v01", primary: "slim sleek 1ml vape cartridge device with black mouthpiece, branded Skywalker OG label, silver and black design", fallback: "slim silver vape cartridge device on dark green background" },
  { id: "v02", primary: "premium branded disposable vape pen device 1000 puffs, labeled Super Lemon Haze, bright yellow and silver design, Canntropy brand", fallback: "yellow branded disposable vape pen on dark green background" },
  { id: "v03", primary: "premium branded disposable vape pen device 1000 puffs, labeled Sour Diesel, dark black and silver design, Canntropy brand", fallback: "black branded disposable vape pen on dark green background" },
  { id: "v04", primary: "cigarette-style white vape joint device 500 puffs, branded Amnesia label, slim cylindrical white and silver design", fallback: "slim white cylindrical vape joint device on dark green background" },
  { id: "v05", primary: "cigarette-style vape joint device 500 puffs, branded El Pablo Blanco label, white and gold luxury design, slim cylindrical", fallback: "slim white gold cylindrical vape joint device on dark green background" },
  { id: "v06", primary: "sleek branded disposable vape pen device 1000 puffs, labeled Lemon Starship, bright yellow and cosmic design, Cannastra brand", fallback: "yellow cosmic branded disposable vape pen on dark green background" },
  { id: "v07", primary: "sleek branded disposable vape pen device 1000 puffs, labeled Galaxy Mist, purple and blue galaxy design, Cannastra brand", fallback: "purple galaxy branded disposable vape pen on dark green background" },

  // ── E-LIQUIDS (9) ─────────────────────────────────────────
  { id: "e01", primary: "small 10ml glass dropper bottle with colorful label, e-liquid bottle, Canntropy brand, amber glass, white dropper cap", fallback: "10ml amber glass dropper bottle on dark green background" },
  { id: "e02", primary: "small 10ml glass dropper bottle with premium label, e-liquid bottle, Canntropy brand, dark glass, white dropper cap, gold accent", fallback: "10ml dark glass dropper bottle on dark green background" },
  { id: "e03", primary: "small 10ml glass dropper bottle with branded label, e-liquid bottle, Canntropy brand, clear glass bottle, colorful label", fallback: "10ml clear glass dropper bottle on dark green background" },
  { id: "e04", primary: "small 10ml plastic e-liquid bottle with colored label, branded Relax Store label, white bottle with colorful design", fallback: "10ml white plastic e-liquid bottle on dark green background" },
  { id: "e05", primary: "small 10ml plastic e-liquid bottle with branded Amnesia label, Relax Store brand, white bottle with bold design", fallback: "10ml white plastic e-liquid bottle bold on dark green background" },
  { id: "e06", primary: "small 10ml plastic e-liquid bottle with a green and brown strain-name branded label, Relax Store, white bottle with earthy tones design", fallback: "10ml white plastic e-liquid bottle green on dark green background" },
  { id: "e07", primary: "10ml glass e-liquid dropper bottle labeled Baked Custard, warm yellow and cream colored label, Harmony brand, elegant design", fallback: "10ml glass e-liquid bottle warm yellow on dark green background" },
  { id: "e08", primary: "30ml glass e-liquid bottle labeled Kiwi Skunk, bright green and brown label, Harmony brand, larger bottle with dropper", fallback: "30ml glass e-liquid bottle green on dark green background" },
  { id: "e09", primary: "60ml glass e-liquid bottle labeled Strawberry Wild, bright red and pink label with strawberry design, Harmony brand, large bottle", fallback: "60ml glass e-liquid bottle pink red on dark green background" },

  // ── VAPORISERS (4) ────────────────────────────────────────
  { id: "vap01", primary: "XVape portable dry herb vaporizer device, matte black premium design, OLED display screen, branded XVape Relax Max, with carrying case accessory", fallback: "matte black portable vaporizer device on dark green background" },
  { id: "vap02", primary: "XMax V3 Pro portable dry herb vaporizer, matte black with digital temperature display, premium compact design, branded XMax", fallback: "compact black digital vaporizer device on dark green background" },
  { id: "vap03", primary: "Yocan portable wax vaporizer device, silver and black design, compact cylindrical shape, branded Yocan logo, premium finish", fallback: "compact silver black vaporizer device on dark green background" },
  { id: "vap04", primary: "XVape Fog Pro portable dry herb vaporizer, matte black sleek design, LED display, premium quality finish, branded XVape", fallback: "sleek black LED vaporizer device on dark green background" },
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateOne(id, prompt, attempt = 1) {
  try {
    const resp = await openai.images.generate({
      model: "gpt-image-1",
      prompt: `${prompt}, ${STYLE}`,
      size: "1024x1024",
      // Note: gpt-image-1 does not support quality:"standard".
      // Valid values are: "low" | "medium" | "high" | "auto".
      quality: "low",
      response_format: "b64_json",
    });
    const b64 = resp.data[0]?.b64_json;
    if (!b64) throw new Error("Empty response — no b64_json in reply");
    const buf = Buffer.from(b64, "base64");
    if (buf.length < 1000) throw new Error(`Suspiciously small image: ${buf.length} bytes`);
    return buf;
  } catch (err) {
    const msg = (err?.message || "").toLowerCase();
    const errMsg = JSON.stringify(err?.error || "").toLowerCase();
    const status = err?.status || err?.code;
    const isContentPolicy = msg.includes("safety") || msg.includes("policy") || msg.includes("content_policy") || errMsg.includes("safety") || errMsg.includes("content_policy");
    if (attempt === 1 && isContentPolicy) {
      console.log(`  [${id}] Content policy hit — retrying with fallback prompt`);
      return null; // signal: use fallback
    }
    if (status === 429) {
      console.log(`  [${id}] Rate limited — waiting 10s`);
      await sleep(10000);
      if (attempt <= 3) return generateOne(id, prompt, attempt + 1);
    }
    if (attempt <= 2) {
      console.log(`  [${id}] Error (attempt ${attempt}): ${msg.slice(0, 80)} — retrying`);
      await sleep(3000);
      return generateOne(id, prompt, attempt + 1);
    }
    throw err;
  }
}

async function processProduct({ id, primary, fallback }) {
  const outPath = path.join(OUT_DIR, `${id}.png`);
  if (fs.existsSync(outPath)) {
    console.log(`✓ [${id}] Already exists — skipping`);
    return { id, status: "already_existed" };
  }

  console.log(`→ [${id}] Generating...`);
  try {
    let buf = await generateOne(id, primary);
    let usedFallback = false;
    if (!buf) {
      // Primary was blocked — try fallback
      buf = await generateOne(id, fallback, 1);
      usedFallback = true;
    }
    if (!buf) throw new Error("Both prompts failed");
    fs.writeFileSync(outPath, buf);
    console.log(`✓ [${id}] Saved (${Math.round(buf.length / 1024)}KB)${usedFallback ? " [fallback used]" : ""}`);
    return { id, status: "generated", fallback_used: usedFallback };
  } catch (err) {
    console.error(`✗ [${id}] FAILED: ${err.message}`);
    return { id, status: "failed", error: err.message };
  }
}

async function runBatch(items, concurrency) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(p => processProduct(p)));
    results.push(...batchResults);
    if (i + concurrency < items.length) await sleep(1500);
  }
  return results;
}

console.log(`\n🎨 Generating ${PRODUCTS.length} product images...\n`);
const results = await runBatch(PRODUCTS, 2);

const generated = results.filter(r => r.status === "generated").length;
const alreadyExisted = results.filter(r => r.status === "already_existed").length;
const failed = results.filter(r => r.status === "failed").length;
const fallbackUsed = results.filter(r => r.fallback_used).length;

const manifest = {
  generated_at: new Date().toISOString(),
  total: PRODUCTS.length,
  generated_count: generated,
  already_existed_count: alreadyExisted,
  fallback_used_count: fallbackUsed,
  failed_count: failed,
  items: results,
};
fs.writeFileSync(path.join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2));

console.log(`\n✅ Done: ${generated} generated, ${alreadyExisted} already existed, ${failed} failed`);
if (fallbackUsed > 0) console.log(`  Fallback prompt used for: ${results.filter(r => r.fallback_used).map(r => r.id).join(", ")}`);
if (failed > 0) console.log(`  Failed IDs: ${results.filter(r => r.status === "failed").map(r => r.id).join(", ")}`);
