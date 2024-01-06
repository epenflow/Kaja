import BlogContent from '@/components/BlogContent';
import { client } from '@/utils/configSanity';
import { groq } from 'next-sanity';
import Container from '@/components/Container';

const query = groq`*[_type=='blog']`;
export default async function Page() {
	const data = await client.fetch(query);
	return (
		<Container>
			<BlogContent posts={data} />
		</Container>
	);
}
