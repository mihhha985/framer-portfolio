const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};


import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {BsArrowRight} from 'react-icons/bs';
import Image from 'next/image';

const WorkSlider = () => {
  return (
		<Swiper
			spaceBetween={10}
			modules={[Pagination]} 
			pagination={{"clickable": true}} 
			className="h-[280px] sm:h-[480px] w-full">
			{workSlides.slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
						{slide.images.map((image, index) => 
							<div
								className='relative rounded-lg overflow-hidden flex items-center justify-center group' 
								key={index}>
								<div className='relative justify-center items-center flex overflow-hidden'>
									<Image src={image.path} alt={image.title} width={500} height={300}/>
									<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
									group-hover:opacity-80 transition-all duration-700'></div>
									<div className='absolute bottom-0'>
										<div className='flex items-center gap-x-2 text-[12px] tracking-[0.2em]'>
											<div>LIVE</div>
											<div>PROJECT</div>
											<div className='text-xl'>
												<BsArrowRight />
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default WorkSlider;