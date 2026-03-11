import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

export function SEO({ title, description = "Malta's #1 Cannabis & CBD Destination. Shop the world's best brands including STIIIZY, Cookies, and more. Same day delivery across Malta." }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | MCW — CBD Relax Shop`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);

  return null;
}
