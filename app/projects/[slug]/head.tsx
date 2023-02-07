import DefaultTags from '../../../components/DefaultTags';
import { generatePageTitle } from '../../../lib/helpers';

export default function Head({ params }: { params: { slug: string } }) {
  return <DefaultTags title={generatePageTitle(params.slug)} />;
}
