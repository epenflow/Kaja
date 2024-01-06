import { PostType } from '@/app/type';
import Container from '@/components/Container';
import { RichText } from '@/components/RichText';
import { client, urlFor } from '@/utils/configSanity';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
interface Props {
	params: {
		slug: string;
	};
}
export async function generatedStaticParams() {
	const query = groq`*[_type=='blog']{
		_id
	}`;
	const result: PostType[] = await client.fetch(query);
	const slug = result.map((slug) => slug._id);
	return slug.map((slug) => ({ slug }));
}
export default async function Page({ params: { slug } }: Props) {
	const query = groq`*[_type=='blog' && _id=='${slug}'][0]{
		...
	  }`;
	const post: PostType = await client.fetch(query, { slug });
	console.info(post);
	return (
		<Container>
			<div className='w-full flex items-center justify-center'>
				<Image
					src={urlFor(post.mainImage).url()}
					height={500}
					width={500}
					alt={post.judul}
				/>
			</div>
			<PortableText
				value={post.deskripsi}
				components={RichText}
			/>
		</Container>
	);
}
