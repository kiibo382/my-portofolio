import { process } from '$lib/markdown';
import {readdirSync, readFileSync} from 'fs';
import dayjs from 'dayjs';

export function get() {
  let posts = readdirSync(`src/posts`)
      .filter(fileName => /.+\.md$/.test(fileName))
      .map(fileName => {
        const metadata = JSON.parse(readFileSync(`src/posts/${fileName.slice(0, -3)}.json`));
        return {
          metadata,
          // remove file extension
          slug: fileName.slice(0, -3)
        };
      });
  // sort the posts by create date.
  posts.sort((a, b) => (dayjs(a.metadata.date, "MMM D, YYYY") -
                        dayjs(b.metadata.date, "MMM D, YYYY")));
  let body = JSON.stringify(posts);

  return {
    body
  }
}
