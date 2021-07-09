import React from 'react';
import styled from 'styled-components/macro';
import { Image } from '../atoms/Image';
import otherInfo from '../../json/ODC.json';
import Cards from '../molecules/ODC/Cards';
import HeroTextDiv from '../molecules/HeroTextDiv';

const SectionWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
`;

const SectionContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SectionContentMain = styled.div`
  width: 100%;
  margin: 0.75rem 0;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainHeroSection = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const OtherInfoSection = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

const ImageWrapper = styled.div`
  position: 'relative';
`;

export const ODC = (props) => {
  return (
    <SectionWrapper>
      <SectionContent>
        <SectionContentMain>
          <MainHeroSection>
            <HeroTextDiv
              headText="Introducing ODC"
              heading="Making smart decision is hard"
              subHeading="Want to know more about ODC or want to set up the ODC based on your requirements!"
              buttonTitle="Know More"
            />
            <HeroImageWrapper></HeroImageWrapper>
            <ImageWrapper>
              <Image
                position="absolute"
                desktopsrcfile="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2021/04/Webp.net-compress-image-2.jpg?time=1622425898"
              />
            </ImageWrapper>
          </MainHeroSection>
          <OtherInfoSection>
            <Cards otherInfo={otherInfo} />
          </OtherInfoSection>
        </SectionContentMain>
      </SectionContent>
    </SectionWrapper>
  );
};
