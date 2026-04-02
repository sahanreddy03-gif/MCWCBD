const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const tsxDir = path.join(root, "src/pages/programmatic");
const tsxSlugs = new Set(
  fs.readdirSync(tsxDir)
    .filter(f => f.endsWith(".tsx"))
    .map(f => f.replace(".tsx", ""))
);

const sitemap = fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
const sitemapSlugs = new Set(
  [...sitemap.matchAll(/\/guides\/([^<]+)/g)].map(m => m[1])
);

const seoPagesSrc = fs.readFileSync(path.join(root, "src/lib/seoPages.ts"), "utf8");
const seoPagesSlugs = new Set(
  [...seoPagesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1])
);

let exitCode = 0;

function check(label, setA, nameA, setB, nameB) {
  const missingFromB = [...setA].filter(s => !setB.has(s));
  const missingFromA = [...setB].filter(s => !setA.has(s));
  if (missingFromB.length || missingFromA.length) {
    console.error("MISMATCH: " + nameA + " vs " + nameB);
    if (missingFromB.length) console.error("  In " + nameA + " but not " + nameB + ":", missingFromB.slice(0, 5));
    if (missingFromA.length) console.error("  In " + nameB + " but not " + nameA + ":", missingFromA.slice(0, 5));
    exitCode = 1;
  } else {
    console.log("OK " + label + ": " + setA.size + " slugs match");
  }
}

console.log("TSX files: " + tsxSlugs.size + ", Sitemap: " + sitemapSlugs.size + ", seoPages: " + seoPagesSlugs.size);
check("TSX vs Sitemap", tsxSlugs, "TSX", sitemapSlugs, "Sitemap");
check("TSX vs seoPages", tsxSlugs, "TSX", seoPagesSlugs, "seoPages");
if (exitCode === 0) console.log("All parity checks passed.");
process.exit(exitCode);
