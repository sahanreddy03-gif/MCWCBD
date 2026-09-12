import { Link } from "wouter";

export default function GziraLegacyGuide({ title }: { title: string }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Legacy guide URL
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">{title}</h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          This legacy Gzira guide remains available for visitors and search engines. MCW’s verified
          retail branches are now listed on the store locator; use the current branch cards below
          for accurate addresses, maps, and directions.
        </p>
        <Link
          href="/store-locator"
          className="inline-block mt-8 px-7 py-3 bg-green-500 text-black font-bold uppercase tracking-wider hover:bg-green-400 transition-colors"
        >
          View verified branches
        </Link>
      </section>
    </main>
  );
}