"use client"
import ServiceSlider from "@/components/ServiceSleder";
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
								<b>My services<span className="text-accent">.</span></b>
								:
						  	<b>Мои услуги<span className="text-accent">.</span></b>
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
								`Hello, my name is Mikhail and I am engaged in turnkey website and web application development. I have over 10 years of experience in commercial development.
				  			During this time I have had the opportunity to participate in the creation of a large number of projects of varying complexity and size. 
								I can therefore confidently say that I can help you realise your ideas in the field of web programming.`
								:
								`Готов взятся за реализацию веб приложения любой сложности, при этом готов предоставить Вам данную услугу "под ключ"
								как говорится от макета до деплоя на сервер. Так  же в последствии готов поддерживать и развивать данное приложение,
								исправлять баги и добавлять новый функционал. При необходимости готов привлечь к работе дополнительных специалистов. `	
							}
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