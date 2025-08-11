import { RequestInit } from "next/dist/server/web/spec-extension/request";

// Replace with your actual Strapi API URL
const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const BLOG_CATEGORIES_API_URL = `${STRAPI_API_URL}/api/blog-categories`;
const BLOG_ENTRIES_API_URL = `${STRAPI_API_URL}/api/blog-entries`;
const PAGE_API_URL = `${STRAPI_API_URL}/api/pages`;

interface BlogCategory {
  id: number;
  name: string;
}

interface BlogEntry {
  id: number;
  blog_category?: BlogCategory;
  title: string;
  slug: string;
  content: string;
}

interface Page {
  id: number;
  title: string;
  slug: string;
  content: string;
}

const FETCH_OPTIONS: RequestInit = {
  cache: "no-store",
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`
  }
};

export async function getBlogCategories() {
  const res = await fetch(BLOG_CATEGORIES_API_URL, FETCH_OPTIONS);
  if (!res.ok) throw new Error("Failed to fetch blog categories");
  
  const data = await res.json();
  return data.data as BlogCategory[];
}

export async function getBlogEntries() {
  const res = await fetch(`${BLOG_ENTRIES_API_URL}?populate=*`, FETCH_OPTIONS);
  if (!res.ok) throw new Error("Failed to fetch blog entries");
  
  const data = await res.json();
console.log('blog-entries',data)
  return data.data as BlogEntry[];
}


export async function getBlogEntryBySlug(slug: string) {
  const res = await fetch(`${BLOG_ENTRIES_API_URL}?populate=*&filters[slug][$eq]=${slug}`, FETCH_OPTIONS);
  if (!res.ok) throw new Error("Failed to fetch blog entry");

  const data = await res.json();
  return data.data[0] as BlogEntry;
}

export async function getPages() {
  const res = await fetch(PAGE_API_URL, FETCH_OPTIONS);
  if (!res.ok) throw new Error("Failed to fetch pages");
  
  const data = await res.json();
  return data.data as Page[];
}

export async function getPageBySlug(slug: string) {
  const res = await fetch(`${PAGE_API_URL}?filters[slug][$eq]=${slug}`, FETCH_OPTIONS);
  if (!res.ok) throw new Error("Failed to fetch page");
  
  const data = await res.json();
  return data.data[0] as Page;
}
