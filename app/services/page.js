"use client"
import ServiceSlider from "@/components/ServiceSleder";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

import {motion} from 'framer-motion';
import {fadeIn} from "@/variants";

function Page() {
	return ( 
		<div className="h-full w-full bg-primary/30 py-32">
			<Circles />
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-x-8">
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
						<motion.h2 
							variants={fadeIn('up', 0.3)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="h2">
							My services <span className="text-accent">.</span>
						</motion.h2>
						<motion.p 
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mb-4 max-w-[400px] mx-auto">
							ex fugiat nostrud nulla ex irure nulla consectetur ea occaecat proident fugiat nisi consequat officia lorem. 
							aliqua eiusmod commodo elit sit in officia sed voluptate Duis sint cupidatat consequat ea cillum et eiusmod voluptate Excepteur. 
							nulla deserunt voluptate cupidatat id nulla lorem sed mollit non amet nulla irure elit cillum pariatur anim. 
							ea do labore ullamco occaecat et commodo exercitation laboris labore deserunt Duis tempor lorem ex aliqua. 
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn('down', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="w-full xl:max-w-[65%]">
						<ServiceSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	);
}

export default Page;