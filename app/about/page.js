"use client"
import { useState } from "react";
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import CountUp from 'react-countup';
import {motion} from "framer-motion";
import {fadeIn} from "@/variants";
import {aboutData} from "@/data/aboutData";
import { useStore } from "@/state/lanState";

function Page() {
	const isEn = useStore((state) => state.isEn);
	const [index, setIndex] = useState(0);

	return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />
			<div className="hidden xl:flex absolute bottom-0 -left-[370px]">
				<Avatar />
			</div>
			<div className="container mx-auto h-full flex flex-col xl:items-center xl:flex-row gap-x-6">
				<div className="flex-1 flex flex-col">
					<motion.h2 
						variants={fadeIn('right', 0.2)} 
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h1">
						{isEn 
							? 
							<b>My achievements as a <span className="text-accent">developer</span></b>
							: 
							<b>Мои достижения как <span className="text-accent">разработчика</span></b>
						}
					</motion.h2>
					<motion.p 
						variants={fadeIn('right', 0.4)} 
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 hidden md:block">
						{isEn 
							? 
							`My path began with simple sites on HTML and CSS, while constantly learning new technologies and development methods.
							Now I can confidently say that I can create any site or application you need.
							During my work, I have received many awards and diplomas that confirm my qualifications as a programmer.`
							:
							`Свой путь я начинал с простых сайтов на HTML и CSS, при этом постоянно учился новым технологиям и методам разработки. 
							Сейчас я могу с уверенностью сказать, что могу создать любой сайт или приложение, которое вам нужно. 
							За время работы я получил множество наград и дипломов, которые подтверждают мою квалификацию как програмиста.`
						}
					</motion.p>
					<motion.div
						variants={fadeIn('right', 0.6)} 
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0">
						<div className="flex flex-1 xl:gap-x-5">
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2x xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={10} duration={5} />
									+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									{isEn ? `Years of experience` : `Годы опыта в разработке`}</div>
							</div>
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2x xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={120} duration={5} />
									+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									{isEn	? `SATISFIED CLIENTS` : `Довольных клиентов`}</div>
							</div>
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2x xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={250} duration={5} />
									+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									{isEn ? `Finished projects` : `Законченные проекты`}
								</div>
							</div>
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2x xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={4} duration={5} />
									+
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									{isEn ? `wining awards` : `Полученные награды`}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
				<motion.div
					variants={fadeIn('left', 0.4)} 
					initial="hidden"
					animate="show"
					exit="hidden" 
					className="flex flex-col w-full xl:max-w-[48%] h-[480px] pt-0 xl:pt-10 relative z-20">
					<div className="flex gap-x-2 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
						{aboutData.map((item, i) => (
							<div
								key={i}
								onClick={() => setIndex(i)}
								className={`${index === i && 'text-accent after:w-[100%] after:!bg-accent after:transition-all after:duration-300'} 
								cursor-pointer capitalize text-md sm:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
							>
								{item.title}
							</div>
						))}
					</div>
					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
						{aboutData[index].info.map((item, index) =>
						<div 
							key={index}
							className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
						> 
							<div className="font-light mb-2 md:mb-0">{item.title}</div>
							<div className="hidden md:flex">-</div>
							<div>{item.stage}</div>
							<div className="flex gap-x-4">
								{item.icons?.map((icon, i) => 
									<div className="text-2xl text-white">{icon}</div>
								)}
							</div>
						</div>
						)}
					</div>
				</motion.div>
			</div>
		</div> 
	);
}

export default Page;