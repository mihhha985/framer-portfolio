"use client"
import Circles from "@/components/Circles";
import TestimonialSlider from "@/components/TestimonialSlider";
import {motion} from "framer-motion";
import {fadeIn} from "@/variants";
import { useStore } from "@/state/lanState";

function Page() {
	const isEn = useStore(state => state.isEn);

	return ( 
		<div className="h-full bg-primary/30 py-32 text-center">
			<Circles />
			<div className="container mx-auto h-full flex flex-col justify-start sm:justify-center">
				<motion.h2
					variants={fadeIn('up', 0.2)}
					initial="hidden"
					animate="show"
					exit="hidden" 
					className="h2 mb-8 xl:mb-0">
					{isEn 
						? 
						<b>Whats my <span class="text-accent">clients</span> say.</b> 
						: 
						<b>Что говорят мои <span className="text-accent">клиенты</span>.</b>
					}
				</motion.h2>
				<motion.div
					variants={fadeIn('up', 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					<TestimonialSlider />
				</motion.div>
			</div>
		</div>
	);
}

export default Page;