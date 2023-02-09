import type { BlogPostData } from '../app/blog/page';
import { parseDate } from '../lib/helpers';
import Link from 'next/link';

type BlogPostPreviewsProps = {
  posts: BlogPostData[];
};

export default function BlogPostPreviews({ posts }: BlogPostPreviewsProps) {
  return (
    <div className="mb-8">
      {posts.map((post) => (
        <Link
          key={post.slug?.current}
          href={`/blog/${post.slug?.current}`}
          className="mb-4 block"
        >
          <p className="underline underline-offset-2">{post.title}</p>
          {post.date && (
            <p className="underline underline-offset-2">
              {parseDate(post.date)}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}
