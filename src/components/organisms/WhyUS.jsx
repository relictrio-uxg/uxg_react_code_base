import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components/macro';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Autoplay } from 'swiper/core';
import why_us from '../../json/why_us.json';

import { Image } from '../atoms/Image';

SwiperCore.use([Autoplay]);

const SectionWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

const SectionInnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 95%;
  }
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

const HeaderHelperText = styled.h6`
  font-size: 1.35rem;
  line-height: 1.35rem;
  letter-spacing: 2.5px;
  color: #3c50e0;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 2rem;
`;

const HeaderPrimaryText = styled.h1`
  font-size: 3rem;
  line-height: 4rem;
  color: #00005c;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2.5rem;
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

const InformationCard = styled.div`
  width: calc(100% - 5.25rem);
  min-height: 420px;
  height: fit-content;
  max-height: 700px;
  padding: 1rem 3rem;
  margin: 0.5rem 0;
  border-radius: 12px;
  box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
`;

const Text = styled.h2`
  font-size: 2rem;
  line-height: 2.8rem;
  color: #00005c;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const SubText = styled.h3`
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: #536083;
  font-weight: 400;
`;

const IconContainer = styled.div`
  margin: 4rem 0 3rem 0;
  height: 5rem;
`;

const WhyUs = (props) => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  let rearrangeSlides = () => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
      console.log('A');
      setSlidesPerView(2);
    } else if (viewportWidth < 1200) {
      console.log('B');
      setSlidesPerView(3);
    } else {
      console.log('C');
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
          <HeaderHelperText>Why US?</HeaderHelperText>
          <HeaderPrimaryText>
            We transform businesses successfully through our services
          </HeaderPrimaryText>
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
                <InformationCard style={{ background: pieceOfInfo.color }}>
                  <IconContainer>
                    <Image desktopsrcfile={pieceOfInfo.icon} height="auto" width="32px" />
                  </IconContainer>
                  <Text>{pieceOfInfo.title}</Text>
                  <SubText>{pieceOfInfo.description}</SubText>
                </InformationCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </CarouselContainer>
    </SectionWrapper>
  );
};

export default WhyUs;
