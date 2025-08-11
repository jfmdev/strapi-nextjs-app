import Link from "next/link";
import { getBlogCategories, getBlogEntries } from "@/utils/strapi";

export default async function BlogPage() {
  const [categories, entries] = await Promise.all([
    getBlogCategories(),
    getBlogEntries(),
  ]);

  // Group entries by category id
  const entriesByCategory: Record<number, typeof entries> = {};
  entries.forEach((entry) => {
    if(!entry.blog_category) {
      return;
    }

    if (!entriesByCategory[entry.blog_category.id]) {
      entriesByCategory[entry.blog_category.id] = [];
    }
    entriesByCategory[entry.blog_category.id].push(entry);
  });

  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Blog Entries</h1>
      {categories.map((cat) => (
        <section key={cat.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
          <ul className="list-disc pl-6">
            {(entriesByCategory[cat.id] || []).map((entry) => (
              <li key={entry.id} className="mb-1">
                <Link
                  href={`/blog/${entry.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {entry.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}