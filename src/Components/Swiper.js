import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function Swiper({im1,im2,im3,im4}) {
  return (
    <div>
        <Swiper
                spaceBetween={0}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide key={im1}><img src={im1} alt='1' /></SwiperSlide>
                <SwiperSlide key={im2}><img src={im2} alt='2' /></SwiperSlide>
                <SwiperSlide key={im3}><img src={im3} alt='3' /></SwiperSlide>
                <SwiperSlide key={im4}><img src={im4} alt='4' /></SwiperSlide>

            </Swiper>
    </div>
  )
}

export default Swiper