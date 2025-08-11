import { getPages } from "@/utils/strapi";

export default async function NavigationMenu() {
  const pages = await getPages();
  const links = pages.map((page) => ({
    key: page.slug,
    label: page.title,
    url: `/page/${page.slug}`
  })).concat([{ key: "blog", label: "Blog", url: "/blog" }]);

  return (
    <nav className="w-full py-4 bg-white dark:bg-gray-900 shadow">
      <ul className="flex flex-row gap-6 justify-center items-center">
        {links.map((link) => (
          <li key={link.key}>
            <a
              href={link.url}
              className="text-gray-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}