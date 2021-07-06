import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { LeftCostSavings } from '../molecules';
import { RightCostSavings } from '../molecules';

export const CostSavingsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  background-color: #ff5670;
  padding: 125px 40px;
  border-radius: 0 100px 0 100px;
  width: 100%;
`;

export const CostSavings = () => {
  return (
    <CostSavingsWrapper>
      <LeftCostSavings />
      <RightCostSavings />
    </CostSavingsWrapper>
  );
};
