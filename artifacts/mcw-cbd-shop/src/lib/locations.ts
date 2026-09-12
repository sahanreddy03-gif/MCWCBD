/**
 * Verified MCW branch locations.
 *
 * Keep all location UI and metadata pointed at this list so an address cannot
 * drift between pages. The supplied Sliema URL is a CID listing; the other
 * supplied URLs are address searches, with Bugibba explicitly approximate.
 */
export interface StoreLocation {
  id: "valletta" | "sliema" | "mellieha" | "bugibba";
  name: string;
  tag?: string;
  address: string;
  addressNote?: string;
  latitude: number;
  longitude: number;
  googleMapsUrl: string;
  directionsUrl: string;
  googleEmbedUrl: string;
  osmEmbedUrl: string;
  mapNote?: string;
  schemaAddress: {
    streetAddress: string;
    addressLocality: string;
    postalCode?: string;
  };
}

const GOOGLE_MAPS_API_KEY = "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY";

function googleEmbedUrl(query: string) {
  return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${query}`;
}

function osmEmbedUrl(latitude: number, longitude: number) {
  const padding = 0.005;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - padding},${latitude - padding},${longitude + padding},${latitude + padding}&layer=mapnik&marker=${latitude},${longitude}`;
}

const locations = [
  {
    id: "valletta",
    name: "Valletta",
    tag: "Main Branch",
    address: "94 First Floor, Triq San Gwann, Valletta",
    mapNote: "Address search — not a verified Google place pin.",
    latitude: 35.8983955,
    longitude: 14.5113547,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=MCW+CBD+Relax+Shop%2C+94+Triq+San+Gwann%2C+Valletta+VLT",
    embedQuery: "MCW+CBD+Relax+Shop%2C+94+Triq+San+Gwann%2C+Valletta+VLT",
    schemaAddress: {
      streetAddress: "94 First Floor, Triq San Gwann",
      addressLocality: "Valletta",
      postalCode: "VLT",
    },
  },
  {
    id: "sliema",
    name: "Sliema",
    address: "Triq Bisazza SLM 1641",
    latitude: 35.9099748,
    longitude: 14.5065631,
    mapUrl: "https://maps.google.com/?cid=3922042299185300750",
    embedQuery: "Triq+Bisazza+SLM+1641",
    schemaAddress: {
      streetAddress: "Triq Bisazza",
      addressLocality: "Sliema",
      postalCode: "SLM 1641",
    },
  },
  {
    id: "mellieha",
    name: "Mellieħa",
    address: "51 Triq Gorg Borg Olivier MLH 1025",
    mapNote: "Address search — not a verified Google place pin.",
    latitude: 35.9573394,
    longitude: 14.3621508,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=MCW+CBD+Relax+Shop%2C+51+Triq+Gorg+Borg+Olivier%2C+Mellieha+MLH+1025",
    embedQuery: "MCW+CBD+Relax+Shop%2C+51+Triq+Gorg+Borg+Olivier%2C+Mellieha+MLH+1025",
    schemaAddress: {
      streetAddress: "51 Triq Gorg Borg Olivier",
      addressLocality: "Mellieha",
      postalCode: "MLH 1025",
    },
  },
  {
    id: "bugibba",
    name: "Bugibba",
    address: "Bugibba Square San Pawl il-Bahar SPB 2510",
    addressNote: "Approximate Bugibba Square area.",
    mapNote: "Approximate Bugibba Square area — address search, not a verified place pin.",
    latitude: 35.9514332,
    longitude: 14.4135753,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=MCW+CBD+Relax+Shop%2C+Bugibba+Square%2C+San+Pawl+il-Bahar+SPB+2510",
    embedQuery: "MCW+CBD+Relax+Shop%2C+Bugibba+Square%2C+San+Pawl+il-Bahar+SPB+2510",
    schemaAddress: {
      streetAddress: "Bugibba Square",
      addressLocality: "San Pawl il-Bahar",
      postalCode: "SPB 2510",
    },
  },
].map((location) => ({
  ...location,
  googleMapsUrl: location.mapUrl,
  directionsUrl: location.mapUrl,
  googleEmbedUrl: googleEmbedUrl(location.embedQuery),
  osmEmbedUrl: osmEmbedUrl(location.latitude, location.longitude),
})) as StoreLocation[];

export const MCW_STORES: StoreLocation[] = locations;

export function getStoreLocation(id: string) {
  return MCW_STORES.find((store) => store.id === id);
}