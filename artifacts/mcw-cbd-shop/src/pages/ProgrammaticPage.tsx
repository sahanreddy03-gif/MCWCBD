import { useParams, Link } from "wouter";
import SeoPage from "./SeoPage";
import { SEO_PAGES_BY_SLUG } from "@/lib/seoPages";

export default function ProgrammaticPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";

  if (!SEO_PAGES_BY_SLUG[slug]) {
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

  return <SeoPage slug={slug} />;
}
