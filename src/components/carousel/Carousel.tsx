import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { recommendations } from '@/data/recommendation';
import { RecommendationCard } from '../resume/RecommendationCard';


const settingCarousel: SwiperOptions = {
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    920: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
  pagination: {
    clickable: true
  },
  autoplay: {
    delay: 4000
  },
  modules: [Pagination, Autoplay]
  // slidesPerView={3}
  // spaceBetween={30}
}

// export const Carousel = ({ children }: { children: React.ReactNode }) => {
//   const isArray = Array.isArray(children);

//   return (
//     <Swiper {...settingCarousel}>
//       {
//         isArray
//           ? children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)
//           : <SwiperSlide>{children}</SwiperSlide>
//       }
//     </Swiper >
//   );
// }

export const Carousel = () => {

  return (
    <Swiper {...settingCarousel}>
      {
        recommendations?.map((recommendation, index) => (
          <SwiperSlide key={index}>
            <RecommendationCard recommendation={recommendation} />
          </SwiperSlide>
        ))
      }
    </Swiper >
  );
}