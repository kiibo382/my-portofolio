import { readFileSync } from 'fs';
import { marked } from 'marked';

export function process(filePath) {
  const metadata = JSON.parse(readFileSync(`${filePath.slice(0, -3)}.json`, 'utf-8'));

  const markdown = readFileSync(filePath, 'utf-8');
  const content = marked.parse(markdown);

  if (!metadata) {
    return {
      metadata: {
        title: "Error",
        date: "?",
        excerpt: "failed to read metadata"
      },
      content: ""
    }
  }
  return { metadata, content };
}
