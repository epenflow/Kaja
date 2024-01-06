import { PostType } from '@/app/type';
import { urlFor } from '@/utils/configSanity';
import Image from 'next/image';
import React from 'react';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
interface Props {
	posts: PostType[];
}
const BlogContent = ({ posts }: Props) => {
	return (
		<div className='flex flex-col flex-wrap gap-2 bg-slate-100 p-4'>
			{posts.map((post) => (
				<Link
					href={{
						pathname: `/blog/${post._id}`,
						query: { slug: post._id },
					}}
					key={post._id}
					className='flex flex-row gap-2 items-center bg-white'>
					<Image
						src={urlFor(post?.mainImage).url()}
						width={320}
						height={320}
						alt={post.judul}
						className='object-cover'
					/>
					<div>
						<h1 className='text-2xl font-bold'>{post.judul}</h1>
						<h4>
							{new Date(post._createdAt).toLocaleDateString(
								'en-US',
								{
									day: 'numeric',
									month: 'long',
									year: 'numeric',
								}
							)}
						</h4>
					</div>
				</Link>
			))}
		</div>
	);
};

export default BlogContent;
