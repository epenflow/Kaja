import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaDribbble,
} from 'react-icons/fa';
import React from 'react';
type TFooterList = {
	name: string;
	list: string[];
};
const footerList: TFooterList[] = [
	{
		name: 'about',
		list: ['flowbite', 'tailwindcss'],
	},
	{
		name: 'follow us',
		list: ['github', 'discord'],
	},
	{
		name: 'legal',
		list: ['privacy policy', 'terms & conditions'],
	},
];
const socialMedia = [
	<FaFacebook size={25} />,
	<FaInstagram size={25} />,
	<FaTwitter size={25} />,
	<FaGithub size={25} />,
	<FaDribbble size={25} />,
];
const Footer = () => {
	return (
		<footer className='bg-black lg:mr-[80px] lg:ml-[80px] text-gray-600'>
			<div className='lg:h-[240px] w-full lg:box-border flex flex-col gap-2 lg:pt-20 lg:pl-10 lg:pr-10 pt-14 p-4 pb-2'>
				<div className='flex lg:flex-row lg:justify-end justify-center w-full gap-3 capitalize flex-col'>
					{footerList.map((field, index) => (
						<div
							key={index}
							className='flex gap-2 flex-col'>
							<h1 className='font-bold lg:pb-5 uppercase'>
								{field.name}
							</h1>
							<span className='bg-gray-600 block h-[1px] lg:hidden w-full' />
							{field.list.map((list, index) => (
								<h1
									key={index}
									className='text-sm'>
									{list}
								</h1>
							))}
						</div>
					))}
				</div>
				<span className='bg-gray-600 block h-[1px] lg:h-[2px] w-full'></span>
				<div className='flex flex-row justify-end gap-2'>
					{socialMedia.map((list, index) => (
						<div key={index}>{list}</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
