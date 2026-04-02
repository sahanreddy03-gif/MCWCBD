import { lazy, Suspense } from "react";
import { useParams } from "wouter";
import { Link } from "wouter";

const pageModules = import.meta.glob<{ default: React.ComponentType }>(
  "./programmatic/*.tsx"
);

const pageRegistry: Record<string, React.LazyExoticComponent<React.ComponentType>> = {};

for (const [path, loader] of Object.entries(pageModules)) {
  const slug = path.replace("./programmatic/", "").replace(".tsx", "");
  pageRegistry[slug] = lazy(loader);
}

function PageLoader() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const PageComponent = pageRegistry[slug];

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

  return (
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
  );
}

export default PageLoader;
