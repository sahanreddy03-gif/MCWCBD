import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from "@/lib/blogData";

const categoryColors: Record<string, string> = {
  Legal: "#22c55e",
  Guides: "#7B4FFF",
  Local: "#FF3366",
  Products: "#FFB800",
  Lifestyle: "#00C8C8",
};

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link href={`/blog/${post.slug}`} className="block group h-full">
        <div className="h-full bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
          <div
            className="h-3 w-full"
            style={{ background: categoryColors[post.category] }}
          />
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: categoryColors[post.category] + "22",
                  color: categoryColors[post.category],
                  border: `1px solid ${categoryColors[post.category]}44`,
                }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock size={11} />
                {post.readingTime} min read
              </span>
            </div>
            <h2 className="font-bebas text-2xl md:text-3xl tracking-wide text-white mb-3 leading-tight group-hover:text-green-400 transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <span className="text-xs text-gray-600">
                {new Date(post.publishedAt).toLocaleDateString("en-MT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-green-400 group-hover:gap-2 transition-all">
                Read More <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const filtered =
    activeCategory === "All"
      ? sorted
      : sorted.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="CBD Blog — Malta's Cannabis & CBD Guide"
        description="Expert guides on CBD legality in Malta, product reviews, how-to articles, and local CBD news. Everything you need to know about CBD in Malta."
      />

      <div className="min-h-screen bg-[#080808]">
        {/* Hero */}
        <section className="relative py-24 md:py-36 bg-[#080808] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.12)_0%,transparent_60%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-green-400 font-black uppercase tracking-[0.4em] text-xs mb-4">
                Knowledge Hub
              </p>
              <h1 className="text-7xl md:text-[9rem] font-bebas tracking-tight text-white leading-[0.85] mb-6">
                CBD BLOG
                <br />
                <span className="text-outline">MALTA</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl">
                Expert guides, legal updates, product reviews, and local CBD
                news — everything you need to know about CBD in Malta.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <div className="sticky top-[65px] z-30 bg-[#080808]/95 backdrop-blur border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-5 py-2 text-xs font-black uppercase tracking-widest border transition-all ${
                    activeCategory === cat
                      ? "bg-green-500 text-black border-green-500"
                      : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1 opacity-60">
                      ({BLOG_POSTS.filter((p) => p.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {activeCategory === "All" && sorted[0] && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">
              Featured Article
            </p>
            <Link href={`/blog/${sorted[0].slug}`} className="group block">
              <div className="relative bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/30 transition-all duration-300">
                <div
                  className="absolute top-0 left-0 h-1 w-full"
                  style={{ background: categoryColors[sorted[0].category] }}
                />
                <div className="p-8 md:p-12 lg:p-16 max-w-3xl">
                  <span
                    className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                    style={{
                      background:
                        categoryColors[sorted[0].category] + "22",
                      color: categoryColors[sorted[0].category],
                      border: `1px solid ${categoryColors[sorted[0].category]}44`,
                    }}
                  >
                    {sorted[0].category}
                  </span>
                  <h2 className="font-bebas text-4xl md:text-6xl tracking-wide text-white mb-4 leading-tight group-hover:text-green-400 transition-colors">
                    {sorted[0].title}
                  </h2>
                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {sorted[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <Clock size={13} />
                      {sorted[0].readingTime} min read
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-bold text-green-400 group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Article Grid */}
        <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory !== "All" && (
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-8">
              {filtered.length} Article{filtered.length !== 1 ? "s" : ""} in{" "}
              {activeCategory}
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" ? sorted.slice(1) : filtered).map(
              (post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              )
            )}
          </div>
        </section>

        {/* SEO Guides CTA */}
        <section className="py-20 bg-[#0d0d0d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-bebas text-5xl md:text-7xl tracking-tight text-white mb-4">
              163 GUIDES & RESOURCES
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Looking for info on CBD in a specific area of Malta? Browse our
              full library of local guides.
            </p>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-green-400 transition-colors"
            >
              Browse All Guides <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
