import { sanityClient } from './sanity';
import { urlForImage } from './sanity';
import { format, parseISO } from 'date-fns';

export async function fetchPostData(query: string) {
  const data = await sanityClient.fetch(query);
  return data;
}

type PostData = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: {
    _ref: string;
    _type: string;
  };
  coverImage?: {};
  content: [[Object]];
  date: string;
  slug: { _type: string; current: string };
  title: string;
};
[];

export async function transformPostData(data: PostData) {
  const author = await getAuthorOfPost(data.author?._ref);
  const postData = {
    slug: data.slug.current,
    title: data.title,
    coverImageURL: urlForImage(data.coverImage) || null,
    author: author || null,
    content: data.content || null,
    date: formatDate(data.date),
  };

  return postData;
}

export type Posts = {
  slug: { _type: string; current: string };
  title: string;
  date: string;
}[];

export function transformPostCovers(postsArray: Posts) {
  const posts = postsArray.map((post) => {
    return {
      slug: post.slug,
      title: post.title,
      date: formatDate(post.date),
    };
  });

  return posts;
}

async function getAuthorOfPost(reference: string) {
  if (!reference) return null;

  const res = await sanityClient.fetch(`*[_id == "${reference}"]`);
  const author = {
    name: res[0].name,
    image: urlForImage(res[0].picture),
  };

  return author;
}

function formatDate(date) {
  return format(parseISO(date), 'LLL d, yyyy');
}
