"use client";
//import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";;

export default function Home() {
  return (
    <div className="bg-primary/60 h-full py-32">
			<div className="flex flex-col sm:pt-0 xl:pt-40 xl:text-left mx-auto h-full container text-center">
				<h1 className="h1">Разработка сайтов и <br />
					вэб-приложений <span className="text-accent ml-2">под ключ</span>
				</h1>
				<motion.p 
					variants={fadeIn('down', 0.4)} 
					initial="hidden" 
					animate="show" 
					exit="hidden"
					className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 sm:mb-10 xl:mb-16">
					Привет! Меня зовут Михаил и я занимаюсь разработкой сайтов и вэб-приложений под ключ. Имею опыт комерческой разработки более 10 лет.
				  За это время довелось поучаствовать в создании большого количества проектов различной сложности и масштаба. 
					И поэтому я могу с уверенностью сказать, что могу помочь вам в реализации ваших идей, в области вэб програмирования.
				</motion.p>
				<div className="flex justify-center xl:hidden relative">
					<ProjectsBtn />
				</div>
				<motion.div 
					variants={fadeIn('down', 0.4)} 
					initial="hidden" 
					animate="show" 
					exit="hidden"
					className="hidden xl:flex"
				>
					<ProjectsBtn />
				</motion.div>
			</div>
			<div className="hidden xl:block w-[1200px] h-full absolute right-0 bottom-0">
				<div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
				<div className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
					<Avatar />
				</div>
			</div>
		</div>
  )
}