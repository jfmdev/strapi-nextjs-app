import { getPageBySlug } from "@/utils/strapi";
import { markdownToHtml } from "@/utils/misc";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const pageData = await getPageBySlug(slug);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div
        className="markdown-content max-w-3xl w-full mx-auto"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(pageData.content) }}
      />
    </main>
  );
}