import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Button } from './../atoms/Button.jsx';
import { Text } from './../atoms/Text';
import { device } from '../../theme';
const connectedProps = (state) => ({
  user: state,
});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

export const RightCostSavingsCover = styled.div`
  width: 30%;
  box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
  background: #ffffff;
  border-radius: 12px;
  padding: 40px 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    width: 50%;
    margin-top: 2rem;
    margin-left: 0rem;
  }
  @media ${device.laptop} {
    width: 40%;
    margin-left: 4rem;
    margin-top: 0rem;
  }
`;
export const RightCostSavingsHeading = styled.h6`
  font-size: 16px;
  line-height: 16px;
  color: #000;
  font-weight: 700;
`;
export const RightCostSavingsPrice = styled.p`
  display: flex;
  margin: 1.2rem 0;
  font-weight: 800;
`;
export const RightCostSavingsPara = styled.p`
  font-size: 15px;
  line-height: 15px;
  @media ${device.mobileM} {
    font-size: 12px;
    margin: 1.2rem 0;
  }
`;
export const RightCostSavingsCost = styled.p`
  margin-top: 1.5rem;
  font-size: 15px;
  line-height: 15px;
  align-items: center;
  margin: 2.5rem 0;
  @media ${device.mobileM} {
    font-size: 12px;
    margin: 1.2rem 0;
  }
`;

export const RightCostSavingsCostSpan = styled.span`
  margin-left: 2.5rem;
  font-weight: bold;
  @media ${device.mobileM} {
    margin-left: 1.5rem;
  }
`;

export const RightCostSavingsExact = styled.p`
  margin: 1.5rem;
  font-size: 14px;
  line-height: 14px;
  margin: 2.5rem 0;
`;
export const RightCostSavingsButton = styled.button`
  color: #3c50e0;
  padding: 16px 10px;
  border: solid 1px rgba(83, 96, 131, 0.1);
  background: #fafcff;
  border-radius: 8px;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.142857px;
  min-width: 175px;
  cursor: pointer;

  &:hover {
    background: #ebf3ff;
  }
`;

export const RightCostSavingsFooter = styled.h6`
  margin: 1.5rem 0;
`;

export const RightCostSavings = (props) => {
  return (
    <RightCostSavingsCover>
      <RightCostSavingsHeading>Estimated Annual Savings</RightCostSavingsHeading>
      <RightCostSavingsPrice>
        <Text color="#3c50e0" text="$" margin="5rem"></Text>
        <Text color="#3c50e0" text="12,480" size="text2" />
      </RightCostSavingsPrice>
      <RightCostSavingsPara>
        <strong>Save&nbsp;60% </strong>
        on your current spend
      </RightCostSavingsPara>
      <RightCostSavingsCost>
        Yearly Insourcing Cost <RightCostSavingsCostSpan>$20,800</RightCostSavingsCostSpan>
      </RightCostSavingsCost>
      <RightCostSavingsCost>
        Yearly Outsourcing Cost
        <RightCostSavingsCostSpan>$8,320</RightCostSavingsCostSpan>
      </RightCostSavingsCost>
      <RightCostSavingsExact>Want to know your exact savings?</RightCostSavingsExact>
      <RightCostSavingsButton>GET IN TOUCH</RightCostSavingsButton>
      <RightCostSavingsFooter>Terms &amp; Conditions?</RightCostSavingsFooter>
    </RightCostSavingsCover>
  );
};

export default connector(RightCostSavings);
