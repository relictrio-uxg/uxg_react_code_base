import React from 'react';
import styled from 'styled-components/macro';
import { Image } from '../atoms/Image';
import otherInfo from '../../json/ODC.json';

const SectionWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
`;

const SectionContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const SectionContentHead = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const SectionContentHeadText = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.25rem;
  line-height: 2.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #3c50e0;
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

const CallToActionSection = styled.div`
  width: 85%;
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  color: #00005c;
  line-height: 5rem;
  letter-spacing: 1.25px;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

const HeroSubHeading = styled.p`
  font-size: 1.5rem;
  color: #536083;
  line-height: 2.25rem;
  letter-spacing: 1px;
  margin-bottom: 2.25rem;
`;

const CallToActionButton = styled.button`
  background: #3c50e0;
  color: #ffffff;
  padding: 1.5rem 3.5rem;
  font-size: 1.5rem;
  outline: none;
  font-weight: 700;
  border: none;
  border-radius: 4px;
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

const InformationContainer = styled.div`
  width: 50%;
  padding: 3rem 2rem;
  margin-bottom: 1rem;
  border-bottom: 4px solid white;
  &:hover {
    border: 0px;
    border-bottom: 4px solid red;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    background: white;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InformationSymbol = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const InformationText = styled.div`
  width: 100%;
  padding: 1rem;
`;

const InfoHeading = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 3rem;
  margin-bottom: 1.5rem;
`;

const InfoSubHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.75rem;
`;

const ODC = (props) => {
  return (
    <SectionWrapper>
      <SectionContent>
        <SectionContentMain>
          <MainHeroSection>
            <SectionContentHead>
              <SectionContentHeadText>Introducing ODC</SectionContentHeadText>
            </SectionContentHead>
            <CallToActionSection>
              <HeroHeading>Making smart decision is hard</HeroHeading>
              <HeroSubHeading>
                Want to know more about ODC or want to set up the ODC based on your requirements!
              </HeroSubHeading>
              <CallToActionButton>Know More</CallToActionButton>
            </CallToActionSection>
            <HeroImageWrapper></HeroImageWrapper>
            <ImageWrapper>
              <Image
                position="absolute"
                desktopsrcfile="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2021/04/Webp.net-compress-image-2.jpg?time=1622425898"
              />
            </ImageWrapper>
          </MainHeroSection>
          <OtherInfoSection>
            {otherInfo.information.map((pieceOfInfo, index) => {
              return (
                <InformationContainer key={index}>
                  <InformationSymbol>
                    <Image desktopsrcfile={pieceOfInfo.icon} />
                  </InformationSymbol>
                  <InformationText>
                    <InfoHeading>{pieceOfInfo.title}</InfoHeading>
                    <InfoSubHeading>{pieceOfInfo.description}</InfoSubHeading>
                  </InformationText>
                </InformationContainer>
              );
            })}
          </OtherInfoSection>
        </SectionContentMain>
      </SectionContent>
    </SectionWrapper>
  );
};

export default ODC;
