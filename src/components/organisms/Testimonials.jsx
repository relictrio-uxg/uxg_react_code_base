import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

import { Image } from '../atoms/Image';
import sectionInfo from '../../json/testimonials.json';

import './testimonial.css';

SwiperCore.use([Autoplay]);

const SectionWrapper = styled.div`
  width: 100%;
  margin: 3rem 0;
  background-color: #ffffff;
`;

const SectionInnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const SectionHeader = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
    align-items: flex-start;
  }
`;

const HeaderHelperText = styled.h6`
  font-size: 1.35rem;
  line-height: 1.35rem;
  letter-spacing: 2.5px;
  color: #3c50e0;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const HeaderPrimaryText = styled.h1`
  text-align: center;
  width: 75%;
  font-size: 3rem;
  line-height: 4rem;
  color: #00005c;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.8px;
  @media (max-width: 768px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  margin: 2.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 769px) {
    width: 95%;
    margin: 2.5rem auto;
  }
`;

const TestimonialWrapper = styled.div`
  width: 100%;
  margin: 0.5rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
  @media (max-width: 769px) {
    width: calc(100% - 2rem);
  }
`;

const Testimonial = styled.div`
  width: 100%;
  padding: 1rem 3rem;
`;

const ProfilePictureContainer = styled.div`
  width: 90%;
  margin: 3.5rem auto 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h2`
  font-weight: 500;
  font-size: 1.75rem;
  color: #00005c;
  text-align: center;
  margin: 1.5rem auto;
`;

const DetailedInfo = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.75rem;
  color: #536083;
  text-align: center;
  margin: 2rem auto 4rem auto;
  padding: 0 1.5rem;
`;

const Break = styled.div`
  width: 100%;
  height: 2px;
  background: #f7f8fa;
  position: relative;
`;

const HightlightedBreak = styled.div`
  height: 2px;
  position: absolute;
  width: 6rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Designation = styled.div`
  margin: 2.5rem auto;
  width: 100%;
  text-align: center;
  font-size: 1.65rem;
  color: #536083;
  font-weight: 500;
`;

export const Testimonials = () => {
  const [slidingEnabled, setSlidingEnabled] = useState(false);

  let rearrangeSlides = () => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
      setSlidingEnabled(true);
    } else {
      setSlidingEnabled(false);
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
          <HeaderHelperText>TESTIMONIALS</HeaderHelperText>
          <HeaderPrimaryText>What does our clients say about us</HeaderPrimaryText>
        </SectionHeader>
        {slidingEnabled ? (
          <TestimonialsContainer>
            <Swiper
              slidesPerView={2}
              spaceBetween={15}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {sectionInfo.information.map((pieceOfInfo, index) => {
                return (
                  <SwiperSlide key={index}>
                    <TestimonialWrapper>
                      <Testimonial>
                        <ProfilePictureContainer
                          className={index === 1 ? 'centerProfileContainer' : ''}
                        >
                          <Image
                            desktopsrcfile={pieceOfInfo.profile}
                            height="auto"
                            width={index === 1 ? '9rem' : '6.5rem'}
                            style={{ borderRadius: '50%', backgroundSize: 'cover' }}
                          />
                        </ProfilePictureContainer>
                        <Name className={index === 1 ? 'centerName' : ''}>{pieceOfInfo.name}</Name>
                        <DetailedInfo className={index === 1 ? 'centerInfo' : ''}>
                          {pieceOfInfo.detail}
                        </DetailedInfo>
                      </Testimonial>
                      <Break>
                        <HightlightedBreak style={{ background: pieceOfInfo.highlightColor }} />
                      </Break>
                      <Designation className={index === 1 ? 'centerDesignation' : ''}>
                        {pieceOfInfo.designation}
                      </Designation>
                    </TestimonialWrapper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </TestimonialsContainer>
        ) : (
          <TestimonialsContainer>
            {sectionInfo.information.map((pieceOfInfo, index) => {
              return (
                <TestimonialWrapper>
                  <Testimonial>
                    <ProfilePictureContainer
                      className={index === 1 ? 'centerProfileContainer' : ''}
                    >
                      <Image
                        desktopsrcfile={pieceOfInfo.profile}
                        height="auto"
                        width={index === 1 ? '9rem' : '6.5rem'}
                        style={{ borderRadius: '50%', backgroundSize: 'cover' }}
                      />
                    </ProfilePictureContainer>
                    <Name className={index === 1 ? 'centerName' : ''}>{pieceOfInfo.name}</Name>
                    <DetailedInfo className={index === 1 ? 'centerInfo' : ''}>
                      {pieceOfInfo.detail}
                    </DetailedInfo>
                  </Testimonial>
                  <Break>
                    <HightlightedBreak style={{ background: pieceOfInfo.highlightColor }} />
                  </Break>
                  <Designation className={index === 1 ? 'centerDesignation' : ''}>
                    {pieceOfInfo.designation}
                  </Designation>
                </TestimonialWrapper>
              );
            })}
          </TestimonialsContainer>
        )}
      </SectionInnerContainer>
    </SectionWrapper>
  );
};
