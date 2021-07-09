import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components/macro';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay } from 'swiper/core';
import why_us from '../../json/why_us.json';
import HeroTextDiv from '../molecules/HeroTextDiv';
import Card from '../molecules/why_us/Card';

SwiperCore.use([Autoplay]);

const SectionWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const SectionInnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  width: 50%;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  margin: 2.5rem 0;
  @media (max-width: 768px) {
    width: 95%;
    margin: 2.5rem auto;
  }
`;

export const WhyUs = (props) => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  let rearrangeSlides = () => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
      setSlidesPerView(2);
    } else if (viewportWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  };

  useEffect(() => {
    rearrangeSlides();
    window.addEventListener('resize', rearrangeSlides);
    return () => window.removeEventListener('resize', rearrangeSlides);
  }, []);

  return (
    <SectionWrapper>
      <SectionInnerContainer>
        <SectionHeader>
          <HeroTextDiv
            headText="Why US?"
            heading="We transform businesses successfully through our services"
            subHeading=""
            buttonTitle=""
          />
        </SectionHeader>
      </SectionInnerContainer>
      <CarouselContainer>
        <Swiper
          slidesPerView={slidesPerView}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {why_us.information.map((pieceOfInfo, index) => {
            return (
              <SwiperSlide key={index}>
                <Card pieceOfInfo={pieceOfInfo} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselContainer>
    </SectionWrapper>
  );
};

export default WhyUs;
