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
						  Мои услуги<span className="text-accent">.</span>
						</motion.h2>
						<motion.p 
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="mb-4 max-w-[400px] hidden xl:block">
							Готов взятся за реализацию веб приложения любой сложности, при этом готов предоставить Вам данную услугу "под ключ"
							как говорится от макета до деплоя на сервер. Так  же в последствии готов поддерживать и развивать данное приложение,
							исправлять баги и добавлять новый функционал. При необходимости готов привлечь к работе дополнительных специалистов. 
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn('down', 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="w-full xl:max-w-[65%] h-[420px]">
						<ServiceSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	);
}

export default Page;