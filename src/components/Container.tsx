import React from 'react';
interface Props {
	children: React.ReactNode;
}

const Container = ({ children }: Props) => {
	return (
		<main className='pr-[80px] pl-[80px] pt-5 flex-col gap-4'>
			{children}
		</main>
	);
};

export default Container;
