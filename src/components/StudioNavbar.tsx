import Link from 'next/link';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
const StudioNavbar = (props: any) => {
	return (
		<div>
			<div className='text-white bg-[#13141B] flex items-center h-14 p-2 gap-2'>
				<IoArrowBack size={20} />
				<Link
					href={'/'}
					className='capitalize font-bold text-sm'>
					back
				</Link>
			</div>
			{props.renderDefault(props)}
		</div>
	);
};

export default StudioNavbar;
