import DefaultTags from '../../DefaultTags';

export default function Head({ params }: { params: { slug: string } }) {
  const capitalizedTitle = params.slug
    .replaceAll('-', ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return <DefaultTags title={capitalizedTitle} />;
}
