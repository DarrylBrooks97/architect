'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type ContentProps = {
	seen: boolean;
};

const links = [
	{
		href: 'https://www.twitter.com/darryl_codes',
		label: 'Twitter',
		icon: <></>,
	},
	{
		href: 'https://github.com/DarrylBrooks97',
		label: 'Github',
		icon: <></>,
	},
	{
		href: 'https://read.cv/darrylcodes',
		label: 'Read.cv',
		icon: <></>,
	},
	{
		href: 'https://www.instagram.com/darryl.codes/',
		label: 'Instagram',
		icon: <></>,
	},
];

export default function Content({ seen }: ContentProps) {
	const [loaded, setLoaded] = useState(seen);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 3500);
	}, [loaded]);

	return (
		<div className="max-w-screen-xl h-screen md:flex mx-auto justify-center p-4">
			{!loaded ? (
				<div className="w-full h-full flex justify-center items-center">
					<p className="text-white self-center animate-onload text-3xl">Hello 👋🏾</p>
				</div>
			) : (
				<div className="w-full h-full flex flex-col justify-center items-center ">
					<div className="flex flex-col space-y-5">
						<div className="animate-afterload ">
							<div className="relative w-28 h-28 overflow-clip rounded-full">
								<Image src="/avatar.jpg" alt="Darryl Brooks" width={1920} height={1080} />
							</div>
						</div>
						<motion.p
							initial={{ filter: 'blur(1px)', opacity: 0, animationDuration: '3s' }}
							animate={{
								opacity: 1,
								filter: 'blur(0px)',
								transition: {
									duration: 3,
									ease: 'easeIn',
								},
							}}
							className=" text-white text-lg"
						>
							Darryl Brooks
						</motion.p>
					</div>
					<div className="w-full px-4 md:w-1/3 flex mt-6">
						<motion.div className="w-full md:w-1/2 flex space-x-6 justify-center items-center">
							{links.slice(0, 2).map((link, idx) => (
								<a
									href={link.href}
									key={link.label}
									className="hover:border-b-[1px] ease-in-out -mt-1 duration-100 hover:border-b-slate-300"
								>
									<motion.p
										key={link.label}
										initial={{ opacity: 0, filter: 'blur(1px)' }}
										animate={{
											opacity: 1,
											filter: 'blur(0px)',
											transition: {
												delay: idx * 0.18,
												duration: 1.4,
												ease: 'easeIn',
											},
										}}
										className=" text-white text-sm md:text-lg"
									>
										{link.label}
									</motion.p>
								</a>
							))}
						</motion.div>
						<motion.div
							animate={{
								transition: {
									staggerChildren: 8,
									staggerDirection: -1,
								},
							}}
							className="w-full md:w-1/2 flex space-x-6 justify-center"
						>
							{links.slice(2, 4).map((link, idx) => (
								<a
									href={link.href}
									key={link.label}
									className="hover:border-b-[1px] transistion-all -mt-[1px]hover:border-b-slate-300"
								>
									<motion.p
										initial={{ filter: 'blur(1px)', opacity: 0 }}
										animate={{
											opacity: 1,
											filter: 'blur(0px)',
											transition: {
												delay: idx * 0.18,
												duration: 1.4,
												ease: 'easeIn',
											},
										}}
										className=" text-white text-sm md:text-lg"
									>
										{link.label}
									</motion.p>
								</a>
							))}
						</motion.div>
					</div>
				</div>
			)}
		</div>
	);
}
