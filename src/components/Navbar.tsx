'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import React from 'react';
import Footer from './Footer';
import { list } from 'postcss';
type TNavlist = {
	name: string;
	href: string;
	child?: Array<{
		name: string;
		href: string;
	}>;
};
const navlist: TNavlist[] = [
	{ name: 'home', href: '/' },
	{
		name: 'about',
		href: '#',
		child: [
			{
				name: 'profile',
				href: '/profile',
			},
			{
				name: 'quality',
				href: '/quality',
			},
			{
				name: 'activity',
				href: '/activity',
			},
		],
	},
	{
		name: 'services',
		href: '#',
		child: [
			{
				name: 'testing',
				href: '/',
			},
		],
	},
	{ name: 'contact', href: '/contact' },
	{ name: 'pricing', href: '/pricing' },
	{
		name: 'blog',
		href: '/blog',
	},
];
const DesktopNav = ({
	pathName,
	setActive,
}: {
	pathName: string;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [isEnter, setEnter] = React.useState<Array<boolean>>([]);
	function handleClick() {
		setActive((prev) => !prev);
	}
	function mouseEnter(index: number) {
		console.info(index);
		setEnter((prev) => {
			let arr = [...prev];
			arr[index] = true;
			return arr;
		});
		console.info(isEnter);
	}
	function mouseLeave(index: number) {
		setEnter((prev) => {
			let arr = [...prev];
			arr[index] = false;
			return arr;
		});
	}
	return (
		<nav className='bg-black flex lg:justify-center p-2 h-[75px] items-center'>
			<ul className='lg:flex hidden flex-row gap-4 capitalize text-sm font-light'>
				{navlist.map((list, index) =>
					!list.child ? (
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
					) : (
						<div
							key={index}
							onMouseEnter={() => mouseEnter(index)}
							onMouseLeave={() => mouseLeave(index)}
							className='text-gray-600 relative inline-block'>
							<li>
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
							<div
								className='absolute flex flex-col gap-2 w-40 justify-center'
								style={
									isEnter
										? {
												backgroundColor: 'black',
										  }
										: { backgroundColor: 'unset' }
								}>
								{isEnter[index]
									? list.child.map((child, childIndex) => (
											<Link
												className='z-[100] p-2 box-border hover:text-white'
												key={childIndex}
												href={child.href}>
												{child.name}
											</Link>
									  ))
									: null}
							</div>
						</div>
					)
				)}
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
	const [isSummary, setSummary] = React.useState<Array<boolean>>([]);
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
	function handleClickChild(index: number) {
		setSummary((prev) => {
			let arr = [...prev];
			arr[index] = arr[index] ? false : true;
			return arr;
		});
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
					{navlist.map((list, index) =>
						!list.child ? (
							<li
								key={index}
								className={
									pathName === list.href
										? 'text-white font-bold'
										: 'text-gray-600'
								}>
								<Link href={list.href}>{list.name}</Link>
								{pathName === list.href ? (
									<span className='block h-[1px] bg-white w-full'></span>
								) : null}
							</li>
						) : (
							<div
								key={index}
								onClick={() => handleClickChild(index)}
								className='flex flex-col'>
								<Link
									href={list.href}
									className={
										pathName === list.href
											? 'text-white font-bold'
											: 'text-gray-600'
									}>
									{list.name}
								</Link>
								{pathName === list.href ? (
									<span className='block h-[1px] bg-white w-full'></span>
								) : null}
								{isSummary[index]
									? list.child.map((child, childIndex) => (
											<Link
												href={child.href}
												key={childIndex}
												className='text-sm pt-2 hover:text-white'>
												{child.name}
											</Link>
									  ))
									: null}
							</div>
						)
					)}
				</ul>
			</nav>
			<Footer isFooter={false} />
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
