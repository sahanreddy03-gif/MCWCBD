import { lazy, Suspense } from "react";
import { useParams, Link } from "wouter";
import { SEO } from "@/components/SEO";
import { SEO_PAGES_BY_SLUG } from "@/lib/seoPages";

const pageModules = import.meta.glob<{ default: React.ComponentType }>(
  "./programmatic/*.tsx"
);

const pageRegistry: Record<string, React.LazyExoticComponent<React.ComponentType>> = {};

for (const [path, loader] of Object.entries(pageModules)) {
  const slug = path.replace("./programmatic/", "").replace(".tsx", "");
  pageRegistry[slug] = lazy(loader);
}

const LOCAL_BIZ_SCHEMA = (slug: string, label: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `MCW CBD Relax Shop — ${label}`,
  url: `https://mcwrelaxshop.com/guides/${slug}`,
  telephone: "+35699536248",
  openingHours: "Mo-Su 09:00-23:30",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MT",
  },
  parentOrganization: { "@id": "https://mcwrelaxshop.com/#organization" },
});

const ARTICLE_SCHEMA = (slug: string, label: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: label,
  url: `https://mcwrelaxshop.com/guides/${slug}`,
  publisher: {
    "@type": "Organization",
    name: "MCW CBD Relax Shop",
    url: "https://mcwrelaxshop.com",
  },
  mainEntityOfPage: `https://mcwrelaxshop.com/guides/${slug}`,
});

function PageLoader() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const PageComponent = pageRegistry[slug];
  const meta = SEO_PAGES_BY_SLUG[slug];

  if (!PageComponent) {
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

  const schemaData = meta?.schemaType === "LocalBusiness"
    ? LOCAL_BIZ_SCHEMA(slug, meta?.label ?? slug)
    : ARTICLE_SCHEMA(slug, meta?.label ?? slug);

  return (
    <>
      {meta && (
        <SEO title={meta.title} description={meta.metaDescription} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400 font-bebas text-2xl tracking-widest">Loading...</p>
          </div>
        </div>
      }>
        <PageComponent />
      </Suspense>
    </>
  );
}

export default PageLoader;
