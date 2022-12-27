import { sanityClient } from './sanity';
import { urlForImage } from './sanity';
import { format, parseISO } from 'date-fns';

export async function fetchPostData(query) {
  const data = await sanityClient.fetch(query);
  return data;
}

export async function transformPostData(data) {
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

export async function transformPostCovers(postsArray) {
  const posts = postsArray.map((post) => {
    return {
      slug: post.slug.current,
      title: post.title,
      date: formatDate(post.date),
    };
  });

  return posts;
}

async function getAuthorOfPost(reference) {
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
