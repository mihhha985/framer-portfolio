"use client";
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import TopLeftImg from '@/components/TopLeftImg';
import Transition from '@/components/Transition';
import { usePathname } from 'next/navigation';
import {AnimatePresence, motion} from 'framer-motion';

export default function Template({ children }) {
	const pathname = usePathname();

  return (
		<AnimatePresence mode="wait">
			<motion.div 
				key={pathname}			  		
				className="h-full w-full">
				<Transition />
				<div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative">
					<Nav />
					<Header />
					<TopLeftImg />
					{children}
				</div>
			</motion.div>
		</AnimatePresence>
	);
}