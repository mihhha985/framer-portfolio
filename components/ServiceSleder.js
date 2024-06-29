"use client"
import { serviceDataRu } from "@/data/serviceData";
import { RxArrowTopRight } from "react-icons/rx";
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const ServiceSlider = () => {
  return (
		<Swiper breakpoints={{
			320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
			640: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
			768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			}} 
			modules={[FreeMode, Pagination]} 
			freeMode={true} 
			pagination={{"clickable": true}} 
			className="h-[280px] sm:h-[360px]">
			{serviceDataRu.map((service, index) => (
				<SwiperSlide key={index}>
					<div className="bg-[rgba(65,47,123,0.1)] h-[240px] sm:h-[320px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 
						group cursor-pointer hover:bg-[rgba(89,65,169,0.2)] transition-all duration-300">
						<div className="text-4xl text-accent mb-4">
							{service.icon}
						</div>
						<div className="mb-8">
							<h3 className="mb-2 text-lg">{service.title}</h3>
							<p className="max-w-[350px] leading-normal">{service.description}</p>
						</div>
						<div className="text-3xl mt-auto">
							<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
						</div>	
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ServiceSlider;