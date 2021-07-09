import React from 'react';
import styled from 'styled-components/macro';
import { LeftCostSavings, RightCostSavings } from '../molecules';
import { device } from '../../theme';

const CostSavingsWrapper = styled.section``;

const CostSavingsInsideWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  background-color: #ff5670;
  padding: 125px 40px;
  border-radius: 0 100px 0 100px;
  width: 80%;
  margin: 0 auto;
  padding: 40px 40px;
  overflow-x: hidden;
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const CostSavings = () => {
  return (
    <CostSavingsWrapper>
      <CostSavingsInsideWrapper>
        <LeftCostSavings />
        <RightCostSavings />
      </CostSavingsInsideWrapper>
    </CostSavingsWrapper>
  );
};
