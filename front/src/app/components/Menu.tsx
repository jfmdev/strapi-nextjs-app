import { getPages } from "@/utils/strapi";

export default async function NavigationMenu() {
  const pages = await getPages();

  return (
    <nav className="w-full py-4 bg-white dark:bg-gray-900 shadow">
      <ul className="flex flex-row gap-6 justify-center items-center">
        {pages.map((page) => (
          <li key={page.id}>
            <a
              href={`/page/${page.slug}`}
              className="text-gray-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}