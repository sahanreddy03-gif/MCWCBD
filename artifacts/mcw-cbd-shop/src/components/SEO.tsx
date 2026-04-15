import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  schema?: object | object[];
}

const DEFAULT_DESC = "Malta's #1 Hemp & CBD Destination. 5 stores: Sliema, Gzira, Mellieħa, Bugibba, Valletta. Shop premium CBD oils, flowers, vapes, gummies. Same-day delivery.";

export function SEO({ title, description = DEFAULT_DESC, canonical, schema }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | MCW — CBD Relax Shop`;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);

    const fullTitle = `${title} | MCW — CBD Relax Shop`;
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);

    if (canonical) {
      const canonicalUrl = `https://mcwcbd.com${canonical}`;
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
      setMeta('meta[property="og:url"]', "content", canonicalUrl);
    }

    if (schema) {
      const existing = document.getElementById("page-schema");
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.id = "page-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(Array.isArray(schema) ? { "@context": "https://schema.org", "@graph": schema } : schema);
      document.head.appendChild(script);
    }

    return () => {
      const pageSchema = document.getElementById("page-schema");
      if (pageSchema) pageSchema.remove();
    };
  }, [title, description, canonical, schema]);

  return null;
}
