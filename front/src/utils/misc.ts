    import { remark } from 'remark';
    import remarkHtml from 'remark-html';


export function markdownToHtml(markdown: string) {
  return remark()
    .use(remarkHtml)
    .processSync(markdown)
    .toString();
}
