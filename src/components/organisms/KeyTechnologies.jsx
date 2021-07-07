import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../../theme';
import { KeyTechDetails, KeyTechImage } from '../molecules';

export const KeyTechnologiesWrapper = styled.section`
  margin: 2rem auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const KeyTechnologies = (props) => {
  return (
    <KeyTechnologiesWrapper>
      <KeyTechDetails />
      <KeyTechImage />
    </KeyTechnologiesWrapper>
  );
};
