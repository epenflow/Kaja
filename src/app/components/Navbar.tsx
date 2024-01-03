'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
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
	const [isActive, setActive] = React.useState<boolean>(false);

	return (
		<nav
			className='bg-black flex lg:justify-center p-2'
			style={
				isActive
					? { height: '100vh' }
					: { height: '75px', alignItems: 'center' }
			}>
			<ul className='lg:flex hidden flex-row gap-4 capitalize text-sm font-light'>
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
			<div className='lg:hidden text-gray-600 flex flex-col w-full'>
				<button
					className='flex items-center'
					style={
						isActive
							? {
									height: 'calc(75px - 8px)',
									alignItems: 'center',
							  }
							: {}
					}
					onClick={() => setActive((prev) => !prev)}>
					{isActive ? (
						<IoMdClose size={25} />
					) : (
						<IoIosMenu size={25} />
					)}
				</button>
				{isActive ? (
					<ul className='flex justify-center flex-col items-center pt-36 capitalize text-2xl'>
						{navlist.map((list, index) => (
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
						))}
					</ul>
				) : null}
			</div>
		</nav>
	);
};

export default Navbar;
