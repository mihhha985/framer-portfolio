"use client"
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialDataRu, testimonialDataEn } from '@/data/testimonialData';
import { useStore } from '@/state/lanState';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = () => {
	const isEn = useStore(state => state.isEn);

  return (
		<Swiper
			navigation={true}
			modules={[Pagination, Navigation]} 
			pagination={{"clickable": true}} 
			className="h-[380px] sm:h-[400px]">
			{isEn 
				? 
				testimonialDataEn.map((person, index) => (
					<SwiperSlide key={index}>
						<div className='h-[360px] sm:h-[380px]'>
							<div className='flex flex-col md:flex-row gap-x-8 h-full px-16'>
								<div className='w-full max-w-[300px] flex flex-col justify-center relative mx-auto xl:mx-0'>
									<div className='flex flex-col justify-center text-center'>
										<div className='mb-2 mx-auto'>
											<Image src={person.image} width={120} height={120} className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]' />
										</div>
										<div className='text-base sm:text-lg'>{person.name}</div>
										<div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
									</div>
								</div>
								<div className='relative flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20
									xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:pl-20'>
									<div className='mb-4'>
										<FaQuoteLeft className='text-2xl sm:text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
									</div>
									<div className='text-sm sm:text-lg text-center md:text-left'>
										{person.message}
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))
				:
				testimonialDataRu.map((person, index) => (
					<SwiperSlide key={index}>
						<div className='h-[360px] sm:h-[380px]'>
							<div className='flex flex-col md:flex-row gap-x-8 h-full px-16'>
								<div className='w-full max-w-[300px] flex flex-col justify-center relative mx-auto xl:mx-0'>
									<div className='flex flex-col justify-center text-center'>
										<div className='mb-2 mx-auto'>
											<Image src={person.image} width={120} height={120} className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]' />
										</div>
										<div className='text-base sm:text-lg'>{person.name}</div>
										<div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
									</div>
								</div>
								<div className='relative flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20
									xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:pl-20'>
									<div className='mb-4'>
										<FaQuoteLeft className='text-2xl sm:text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
									</div>
									<div className='text-sm sm:text-lg text-center md:text-left'>
										{person.message}
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))
			}
		</Swiper>
	);
};

export default TestimonialSlider;