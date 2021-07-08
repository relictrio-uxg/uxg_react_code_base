import React from 'react';
import styled from 'styled-components/macro';
import { Image } from '../atoms/Image';
import uxg_work from '../../json/uxg_work.json';

const SectionWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
`;

const SectionContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const ListContainer = styled.div`
  width: 50%;
`;

const SectionContentHead = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

const SectionContentHeadText = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #3c50e0;
`;

const MainHeroSection = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CallToActionSection = styled.div`
  width: 100%;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  color: #00005c;
  line-height: 4rem;
  letter-spacing: 1.25px;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

const HeroSubHeading = styled.p`
  font-size: 1.5rem;
  color: #536083;
  line-height: 2.5rem;
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

const ListCartItems = styled.li`
  padding: 40px 30px 40px 80px;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.025em;
  color: #536083;
  border-bottom: 1px solid #ebf3ff;
  list-style: none;
  counter-increment: section;
  position: relative;
  z-index: 1;
  font-family: var(--uxg-semibold-font);
  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 12px;
    color: #00005c;
  }
`;

const IndexTab = styled.p`
  position: absolute;
  left: 30px;
`;

const HowWeWork = () => {
  console.log(uxg_work, 'uxg_work');
  const { list } = uxg_work;
  return (
    <SectionWrapper>
      <SectionContent>
        <MainHeroSection>
          <SectionContentHead>
            <SectionContentHeadText>HOW WE WORK</SectionContentHeadText>
          </SectionContentHead>
          <CallToActionSection>
            <HeroHeading>How we provide the best solutions to our clients?</HeroHeading>
            <HeroSubHeading>
              RELICTRIO always strives to be at the top levels when it comes to servicing esteemed
              clients as we believe excellence is everything. Our process is simple and works
              seamlessly for brands, individual clients, and agencies at all levels. Our focus is to
              provide you with the most viable candidates to better your business.
            </HeroSubHeading>
            <CallToActionButton>Start Process</CallToActionButton>
          </CallToActionSection>
        </MainHeroSection>
        <ListContainer>
          {list.map((item, index) => {
            return (
              <ListCartItems key={index}>
                <IndexTab>{`0${index + 1}`}</IndexTab>
                <a title={item.title}>{item.title}</a>
              </ListCartItems>
            );
          })}
        </ListContainer>
      </SectionContent>
    </SectionWrapper>
  );
};

export default HowWeWork;
