// Replace with your actual Strapi API URL
const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const PAGE_API_URL = `${STRAPI_API_URL}/api/pages`;

interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
}

export async function getPages() {
  const res = await fetch(PAGE_API_URL, { cache: "no-store", headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`
  } });
  if (!res.ok) throw new Error("Failed to fetch pages");
  const data = await res.json();
  return data.data as Page[];
}

export async function getPageBySlug(slug: string) {
  const res = await fetch(`${PAGE_API_URL}?filters[slug][$eq]=${slug}`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`
    }
  });
  if (!res.ok) throw new Error("Failed to fetch page");
  const data = await res.json();
  return data.data[0] as Page;
}
