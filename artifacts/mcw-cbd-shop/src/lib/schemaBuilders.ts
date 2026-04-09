export function localBizSchema(slug: string, label: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `MCW CBD Relax Shop — ${label}`,
    url: `https://mcwcbd.com/guides/${slug}`,
    telephone: "+35699536248",
    openingHours: "Mo-Su 09:00-23:30",
    priceRange: "€€",
    address: { "@type": "PostalAddress", addressCountry: "MT" },
    parentOrganization: { "@id": "https://mcwcbd.com/#organization" },
  };
}

export function articleSchema(slug: string, headline: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    url: `https://mcwcbd.com/guides/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "MCW CBD Relax Shop",
      url: "https://mcwcbd.com",
    },
    mainEntityOfPage: `https://mcwcbd.com/guides/${slug}`,
  };
}

export function buildSchema(
  slug: string,
  label: string,
  schemaType: "LocalBusiness" | "Article"
) {
  return schemaType === "LocalBusiness"
    ? localBizSchema(slug, label)
    : articleSchema(slug, label);
}
