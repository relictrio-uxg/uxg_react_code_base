import React from 'react';
import styled from 'styled-components/macro';
import uxg_work from '../../json/uxg_work.json';
import HeroTextDiv from '../molecules/HeroTextDiv';

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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ListContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const MainHeroSection = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
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

export const HowWeWork = () => {
  const { list } = uxg_work;
  return (
    <SectionWrapper>
      <SectionContent>
        <MainHeroSection>
          <HeroTextDiv
            headText="HOW WE WORK"
            heading="How we provide the best solutions to our clients?"
            subHeading="RELICTRIO always strives to be at the top levels when it comes to servicing esteemed
              clients as we believe excellence is everything. Our process is simple and works
              seamlessly for brands, individual clients, and agencies at all levels. Our focus is to
              provide you with the most viable candidates to better your business."
            buttonTitle="Start Process"
          />
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
