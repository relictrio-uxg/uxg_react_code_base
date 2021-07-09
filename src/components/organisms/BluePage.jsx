import React from 'react';
import styled from 'styled-components/macro';
import { Button } from './../atoms/Button';

const BluePageWrapper = styled.section`
  background-color: #3c50e0;
  border-radius: 100px 100px 0 100px;
  padding: 8rem 0;
  margin: 4rem auto;
  width: 100%;
  max-width: 1080px;
`;

const BluePageInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1145px;
  text-align: center;
`;

const BluePageHeading = styled.h4`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.5px;
  color: #8da4ff;
  max-width: 400px;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: 800;
`;

const BluePageSubHeading = styled.h5`
  font-size: 26px;
  line-height: 44px;
  color: #fff;
  margin: 25px auto 15px;
  max-width: 600px;
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

const BluePageDesc = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #ebf3ff;
  max-width: 600px;
  margin: 0 auto 15px;
  letter-spacing: 0.214286px;
  margin-bottom: 4rem;
  @media (max-width: 600px) {
    font-size: 12px;
    width: 80%;
  }
`;

export const BluePage = () => {
  return (
    <BluePageWrapper>
      <BluePageInner>
        <BluePageHeading>Global Recruitment</BluePageHeading>
        <BluePageSubHeading>Searching talents for your onsite team?</BluePageSubHeading>
        <BluePageDesc>
          We cater to all your needs, whether its about full-time recruitment’s, partnership or
          ongoing management support.
        </BluePageDesc>
        <Button text="Get in Touch" bg="#fff" br="4px" color="#3C50E0" pd="15px 30px" />
      </BluePageInner>
    </BluePageWrapper>
  );
};
