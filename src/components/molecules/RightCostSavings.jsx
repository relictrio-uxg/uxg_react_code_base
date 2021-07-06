import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Button } from './../atoms/Button.jsx';
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
  padding: 65px 40px 40px;
`;
export const RightCostSavingsHeading = styled.h6`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const RightCostSavingsPrice = styled.p``;
export const RightCostSavingsPara = styled.p``;
export const RightCostSavingsCost = styled.p``;
export const RightCostSavingsFooter = styled.h6``;

export const RightCostSavings = (props) => {
  return (
    <RightCostSavingsCover>
      <RightCostSavingsHeading>
        Estimated Annual Savings
        <RightCostSavingsPrice>$ 12480</RightCostSavingsPrice>
        <RightCostSavingsPara>
          <strong>Save&nbsp;60%</strong>
          on your current spend
        </RightCostSavingsPara>
        <RightCostSavingsCost>Yearly Insourcing Cost $20,800</RightCostSavingsCost>
        <RightCostSavingsCost>Yearly Outsourcing Cost $8,320</RightCostSavingsCost>
        <Button text="Get in touch" bg="#3C50E0" br="4px" />
        <RightCostSavingsFooter>Terms &amp; Conditions?</RightCostSavingsFooter>
      </RightCostSavingsHeading>
    </RightCostSavingsCover>
  );
};

export default connector(RightCostSavings);
