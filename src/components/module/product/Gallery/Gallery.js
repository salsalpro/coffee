'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import { FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';

export default function Gallery() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
         <Swiper
        style={{
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 mb-3 cursor-pointer"
      >
        <SwiperSlide className='w-52 h-52 flex justify-center select-none cursor-grab'>
          <Image className='w-52 h-52 object-cover mx-auto ' height={200} width={200} alt='cofee' src="/coffee/coffeeID_1/l1.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-52 h-52 flex justify-center select-none cursor-grab'>
          <Image className='w-52 h-52 object-cover mx-auto ' height={200} width={200} alt='cofee' src="/coffee/coffeeID_1/l2.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-52 h-52 flex justify-center select-none cursor-grab'>
          <Image className='w-52 h-52 object-cover mx-auto ' height={200} width={200} alt='cofee' src="/coffee/coffeeID_1/l3.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-52 h-52 flex justify-center select-none cursor-grab'>
          <Image className='w-52 h-52 object-cover mx-auto ' height={200} width={200} alt='cofee' src="/coffee/coffeeID_1/l4.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-52 h-52 flex justify-center select-none cursor-grab'>
          <Image className='w-52 h-52 object-cover mx-auto ' height={200} width={200} alt='cofee' src="/coffee/coffeeID_1/l5.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-52 h-52 flex justify-center select-none cursor-grab'>
          <Image className='w-52 h-52 object-cover mx-auto ' height={200} width={200} alt='cofee' src="/coffee/coffeeID_1/l6.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper max-h-16"
      >
        <SwiperSlide className='w-16 h-16 cursor-pointer cursor-pointer-blobal cursor-grab-blobal max-h-16'>
          <Image className='w-16 h-16 object-cover mx-auto' alt='coffee' width={60} height={60} src="/coffee/coffeeID_1/l1.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-16 h-16 cursor-pointer cursor-pointer-blobal cursor-grab-blobal max-h-16'>
          <Image className='w-16 h-16 object-cover mx-auto' alt='coffee' width={60} height={60} src="/coffee/coffeeID_1/l2.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-16 h-16 cursor-pointer cursor-pointer-blobal cursor-grab-blobal max-h-16'>
          <Image className='w-16 h-16 object-cover mx-auto' alt='coffee' width={60} height={60} src="/coffee/coffeeID_1/l3.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-16 h-16 cursor-pointer cursor-pointer-blobal cursor-grab-blobal max-h-16'>
          <Image className='w-16 h-16 object-cover mx-auto' alt='coffee' width={60} height={60} src="/coffee/coffeeID_1/l4.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-16 h-16 cursor-pointer cursor-pointer-blobal cursor-grab-blobal max-h-16'>
          <Image className='w-16 h-16 object-cover mx-auto' alt='coffee' width={60} height={60} src="/coffee/coffeeID_1/l5.jpg" />
        </SwiperSlide>
        <SwiperSlide className='w-16 h-16 cursor-pointer cursor-pointer-blobal cursor-grab-blobal max-h-16'>
          <Image className='w-16 h-16 object-cover mx-auto' alt='coffee' width={60} height={60} src="/coffee/coffeeID_1/l6.jpg" />
        </SwiperSlide>
      </Swiper>
      </>
    )
}
