'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import React from 'react';
import Footer from './Footer';
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
const DesktopNav = ({
	pathName,
	setActive,
}: {
	pathName: string;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	function handleClick() {
		setActive((prev) => !prev);
	}
	return (
		<nav className='bg-black flex lg:justify-center p-2 h-[75px] items-center'>
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
			<button
				className='flex lg:hidden text-gray-600 items-center'
				onClick={handleClick}>
				<IoIosMenu size={25} />
			</button>
		</nav>
	);
};
const MobileNav = ({
	setActive,
	pathName,
	isActive,
}: {
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
	pathName: string;
	isActive: boolean;
}) => {
	React.useEffect(() => {
		if (isActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isActive]);
	function handleClick() {
		setActive((prev) => !prev);
	}
	return (
		<header className='h-screen bg-black p-2 text-gray-600 fixed w-screen overflow-hidden z-50'>
			<nav>
				<button
					className='h-[75px] text-gray-600 flex items-center'
					onClick={handleClick}>
					<IoMdClose size={'25px'} />
				</button>
				<ul className='pl-3 pr-3 text-base flex flex-col gap-1 uppercase'>
					{navlist.map((list, index) => (
						<li
							key={index}
							className={
								pathName === list.href
									? 'text-white font-bold'
									: 'text-gray-600'
							}
							onClick={handleClick}>
							<Link href={list.href}>{list.name}</Link>
							{pathName === list.href ? (
								<span className='block h-[1px] bg-white w-full'></span>
							) : null}
						</li>
					))}
				</ul>
			</nav>
			<Footer />
		</header>
	);
};
const Navbar = () => {
	const pathName = usePathname();
	const [isActive, setActive] = React.useState<boolean>(false);
	return isActive ? (
		<MobileNav
			isActive={isActive}
			setActive={setActive}
			pathName={pathName}
		/>
	) : (
		<DesktopNav
			pathName={pathName}
			setActive={setActive}
		/>
	);
};

export default Navbar;
