import Image from 'next/image';
export default function Home() {
	return (
		<main className='ml-[80px] mr-[80px]'>
			<section className='bg-black text-white relative p-2'>
				<h1 className='uppercase text-[20rem] font-bold opacity-25 z-30 relative'>
					jeep
				</h1>
				<Image
					src='/images/jeep.png'
					alt='jeep'
					width={700}
					height={300}
					style={{
						position: 'absolute',
						zIndex: 0,
						top: '20%',
						right: '50%',
						left: '45%',
					}}
				/>
				<h5 className='capitalize font-bold'>kaldera jeep adventure</h5>
				<p className='w-1/2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ratione recusandae maxime nostrum cupiditate unde eveniet
					fuga impedit, dolor, tenetur praesentium suscipit est neque,
					omnis ipsum. Consequuntur quis impedit ut rem.
				</p>
			</section>
		</main>
	);
}
