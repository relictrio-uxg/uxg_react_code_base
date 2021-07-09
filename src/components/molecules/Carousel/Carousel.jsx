import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import BlogCard from '../BlogPage/BlogCard';
import { data } from './blog.js';
import './Carousel.css';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {data.map((items) => {
          console.log(items.heading);
          return (
            <SwiperSlide>
              <BlogCard
                img={items.image}
                heading={items.heading}
                subheading={items.subheading}
                author={items.author}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
