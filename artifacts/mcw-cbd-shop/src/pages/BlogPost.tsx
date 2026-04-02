import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS, type BlogPost } from "@/lib/blogData";

const categoryColors: Record<string, string> = {
  Legal: "#22c55e",
  Guides: "#7B4FFF",
  Local: "#FF3366",
  Products: "#FFB800",
  Lifestyle: "#00C8C8",
};

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-bebas text-4xl md:text-5xl tracking-wide text-white mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-bold text-white text-base mt-4 mb-1">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="text-gray-300 text-base leading-relaxed ml-4 mb-1 list-disc">
          {line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, (_, m) => m)}
        </li>
      );
    } else if (line.startsWith("| ") && line.includes("|")) {
      elements.push(
        <div key={key++} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {line.split("\n").map((row, r) => (
                <tr key={r} className="border-b border-white/10">
                  {row.split("|").filter(Boolean).map((cell, c) => (
                    <td key={c} className="px-4 py-2 text-gray-300">{cell.trim()}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (line.trim() !== "") {
      const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      elements.push(
        <p
          key={key++}
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    }
  }

  return elements;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bebas text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bebas tracking-wide mb-6">Article Not Found</h2>
        <Link href="/blog" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== slug && (p.category === post.category || Math.random() > 0.5)
  ).slice(0, 3);

  const color = categoryColors[post.category] ?? "#22c55e";

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: {
              "@type": "Organization",
              name: "MCW CBD Relax Shop",
            },
            publisher: {
              "@type": "Organization",
              name: "MCW CBD Relax Shop",
              url: "https://mcwrelaxshop.com",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-[#080808]">
        {/* Hero */}
        <section className="relative pt-16 pb-12 bg-[#080808] overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(ellipse at top left, ${color} 0%, transparent 60%)`,
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium mb-8"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    background: color + "22",
                    color,
                    border: `1px solid ${color}44`,
                  }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock size={12} />
                  {post.readingTime} min read
                </span>
                <span className="text-xs text-gray-600">
                  {new Date(post.publishedAt).toLocaleDateString("en-MT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.88] mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed border-l-4 pl-5 italic" style={{ borderColor: color }}>
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            {renderContent(post.content)}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 md:p-12 rounded-3xl text-center"
            style={{
              background: `linear-gradient(135deg, ${color}22, transparent)`,
              border: `1px solid ${color}33`,
            }}
          >
            <h3 className="font-bebas text-4xl md:text-5xl text-white mb-3">
              READY TO BUY CBD IN MALTA?
            </h3>
            <p className="text-gray-400 mb-6">
              Visit any of our 4 stores or order via WhatsApp with same-day delivery.
            </p>
            <a
              href="https://wa.me/35699536248"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-green-500 text-black font-black uppercase tracking-widest text-sm hover:bg-green-400 transition-colors"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
          </motion.div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-bebas text-4xl md:text-6xl tracking-tight text-white mb-10">
                MORE ARTICLES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all h-full">
                      <span
                        className="inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-3"
                        style={{
                          background: (categoryColors[p.category] ?? "#22c55e") + "22",
                          color: categoryColors[p.category] ?? "#22c55e",
                        }}
                      >
                        {p.category}
                      </span>
                      <h3 className="font-bebas text-2xl text-white group-hover:text-green-400 transition-colors leading-tight mb-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{p.excerpt}</p>
                      <span className="flex items-center gap-1 text-xs font-bold text-green-400 mt-3">
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
