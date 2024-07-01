const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Интернет-магазин Geekom',
          path: '/thumb1.jpg',
					link: 'https://www.geekom.ru/',
				},
        {
          title: 'Интернет-магазин Street Beat',
          path: '/thumb2.jpg',
					link: 'https://street-beat.ru/',
        },
        {
          title: 'Интернет-магазин Husband',
          path: '/thumb3.jpg',
					link: 'https://husbandrnd.ru/',
        },
        {
          title: 'Свадебный салон Mary Trufel',
          path: '/thumb4.jpg',
					link: 'https://rostov.marytrufel.ru/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Сервис психологической помощи Душа',
          path: '/thumb4.jpg',
					link: 'https://soulpsy.world/',
        },
        {
          title: 'Клининговая компания Домовенок',
          path: '/thumb1.jpg',
					link: 'https://www.domovenok.ru/',
        },
        {
          title: 'Строительная компания Альмистрой',
          path: '/thumb2.jpg',
					link: 'https://almistroy.ru/',
        },
        {
          title: 'Стоматологическая клиника Dr. Kogina',
          path: '/thumb3.jpg',
					link: 'https://drkogina.ru/',
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
import Link from 'next/link';
import { list } from 'postcss';

const WorkSlider = () => {
  return (
		<Swiper
			spaceBetween={10}
			modules={[Pagination]} 
			pagination={{"clickable": true}} 
			className="h-[360px] sm:h-[380px] md:h-[480px] w-full">
			{workSlides.slides.map((slide, index) => (
				<SwiperSlide key={index}>
					<div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
						{slide.images.map((image, index) => 
							<Link href={image.link}
								className='relative rounded-lg overflow-hidden flex items-center justify-center group' 
								key={index}>
								<div className='relative justify-center items-center flex overflow-hidden h-auto sm:h-[160px] md:h-[200px] xl:h-auto'>
									<Image src={image.path} alt={image.title} width={500} height={300}/>
									<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
									group-hover:opacity-80 transition-all duration-700'></div>
									<div className='absolute bottom-1'>
										<div className='flex items-center gap-x-2 p-1'>
											<div className='text-[10px] sm:text-[12px] tracking-wider'>{image.title}</div>
											<div className='text-xl'>
												<BsArrowRight />
											</div>
										</div>
									</div>
								</div>
							</Link>
						)}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default WorkSlider;