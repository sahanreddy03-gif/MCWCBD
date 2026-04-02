/**
 * ProgrammaticPage — routes /guides/:slug
 *
 * Architecture (intentional):
 * - Primary renderer: individual TSX files in ./programmatic/ (original ZIP-imported content,
 *   preserved as-is). These are lazy-loaded via import.meta.glob.
 * - SEO layer: title, metaDescription, and JSON-LD schema are injected from seoPages.ts
 *   (SEO_PAGES_BY_SLUG) on top of each page, without modifying the authored TSX content.
 * - Fallback renderer: SeoPage component is used when a slug exists in SEO_PAGES_BY_SLUG but
 *   has no corresponding TSX file (e.g. future pages added via data only).
 * - 404: shown when slug is unknown to both sources.
 *
 * seoPages.ts is the single source of truth for slug metadata (title, metaDescription,
 * schemaType) and also drives the Guides index page and sitemap.
 */

import { lazy, Suspense } from "react";
import { useParams, Link } from "wouter";
import { SEO } from "@/components/SEO";
import { SEO_PAGES_BY_SLUG } from "@/lib/seoPages";
import { buildSchema } from "@/lib/schemaBuilders";
import SeoPage from "./SeoPage";

const pageModules = import.meta.glob<{ default: React.ComponentType }>(
  "./programmatic/*.tsx"
);

const pageRegistry: Record<string, React.LazyExoticComponent<React.ComponentType>> = {};

for (const [path, loader] of Object.entries(pageModules)) {
  const slug = path.replace("./programmatic/", "").replace(".tsx", "");
  pageRegistry[slug] = lazy(loader);
}


const Spinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-gray-400 font-bebas text-2xl tracking-widest">Loading...</p>
    </div>
  </div>
);

export default function ProgrammaticPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const PageComponent = pageRegistry[slug];
  const meta = SEO_PAGES_BY_SLUG[slug];

  if (!PageComponent && !meta) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bebas text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bebas tracking-wide mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">This guide doesn't exist.</p>
        <Link href="/guides" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors">
          Browse All Guides
        </Link>
      </div>
    );
  }

  if (!PageComponent && meta) {
    return (
      <Suspense fallback={<Spinner />}>
        <SeoPage slug={slug} />
      </Suspense>
    );
  }

  const schemaData = buildSchema(slug, meta?.label ?? slug, meta?.schemaType ?? "Article");

  return (
    <>
      {meta && (
        <SEO title={meta.title} description={meta.metaDescription} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Suspense fallback={<Spinner />}>
        <PageComponent />
      </Suspense>
    </>
  );
}
