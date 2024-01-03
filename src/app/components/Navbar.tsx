'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
type TNavlist = {
	name: string;
	href: string;
};
const navlist: TNavlist[] = [
	{ name: 'home', href: '/' },
	{ name: 'about', href: '/about' },
	{ name: 'services', href: '/services' },
	{ name: 'contact', href: '/contact' },
	{ name: 'pricing', href: '/pricing' },
];
const Navbar = () => {
	const pathName = usePathname();
	return (
		<nav className='bg-black h-[75px] flex items-center justify-center p-2'>
			<ul className='flex flex-row gap-4 capitalize text-sm font-light'>
				{navlist.map((list, index) => {
					return (
						<li key={index}>
							<Link
								href={list.href}
								className={
									pathName === list.href
										? `text-white`
										: `text-gray-600`
								}>
								{list.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
