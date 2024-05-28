import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import './index.scss'


import { Navigation } from 'swiper/modules';

export default function NewFolder() {
  return (
    <>
    <section className='NewFolderSwip'>
      <Swiper navigation={true}
       slidesPerView={1}
       spaceBetween={0}
       modules={[Navigation]} 
      className="mySwiper">
        
             <SwiperSlide>
            <div className="OneImages">
                <img src="https://lights-demo.myshopify.com/cdn/shop/products/shop03_600x.jpg?v=1640681626" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="OneImages">
             <img src="https://lights-demo.myshopify.com/cdn/shop/products/shop04_600x.jpg?v=1640681704" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="OneImages">
        <img src="https://lights-demo.myshopify.com/cdn/shop/products/shop03_600x.jpg?v=1640681626" alt="" />
            </div>
        </SwiperSlide>
       
       
       
      </Swiper>
      </section>
    </>
  );
}
