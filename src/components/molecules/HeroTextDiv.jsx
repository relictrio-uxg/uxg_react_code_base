import React from 'react';
import styled from 'styled-components/macro';

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

const HeroTextDiv = ({ headText, heading, subHeading, buttonTitle }) => {
  return (
    <div>
      <SectionContentHead>
        <SectionContentHeadText>{headText}</SectionContentHeadText>
      </SectionContentHead>
      <CallToActionSection>
        <HeroHeading>{heading}</HeroHeading>
        <HeroSubHeading>{subHeading}</HeroSubHeading>
        {buttonTitle && <CallToActionButton>{buttonTitle}</CallToActionButton>}
      </CallToActionSection>
    </div>
  );
};

export default HeroTextDiv;
