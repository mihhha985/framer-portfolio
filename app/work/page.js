"use client"
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import {motion} from 'framer-motion';
import {fadeIn} from "@/variants";
import { useStore } from "@/state/lanState";

function Page() {
	const isEn = useStore((state) => state.isEn);

	return ( 
		<div className="h-full w-full bg-primary/30 py-32 flex flex-col justify-center">
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
							{isEn 
								?
								<b>My works <span className="text-accent">.</span></b>
								:
								<b>Мои работы <span className="text-accent">.</span></b>
							}
						</motion.h2>
						<motion.p 
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mb-4 max-w-[400px] hidden xl:block">
							{isEn
								?
									`In this section you will find my recent work. 
									I have selected what I consider to be the most interesting and high quality projects from various areas and themes. 
									So that you can choose the most suitable variant that corresponds to your theme.
									And use it as an example to determine the tensions in developing the functionality of your future web application.`
								:
									`В данном разделе представлены мои работы, которые я выполнил за последнее время. 
									Я подобрал на мой взгяд наиболее интересные и качественные проекты, из разных областей и тематик. 
									Чтобы вы могли подобрать наиболее подходящий вариант, который будет соответствовать вашей тематики.
									И использовать его в качестве примера для определения напрявления в разработке функционала вашего будушего веб-приложения.`
							}
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn('down', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="w-full xl:max-w-[65%]">
						<WorkSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	);
}

export default Page;