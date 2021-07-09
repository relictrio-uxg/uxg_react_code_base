import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { device } from '../../theme';
const connectedProps = (state) => ({
  user: state,
});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

const KeyTechDetailsWrapper = styled.div`
  width: 80%;
  @media ${device.tablet} {
    margin-left: 4rem;
  }
`;

const KeyTechHeading = styled.h4`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  margin-top: 30px;
  text-transform: uppercase;
  color: #3c50e0;
  font-weight: 600;
`;

const KeyTechHeading2 = styled.h5`
  font-size: 18px;
  line-height: 38px;
  color: #00005c;
  margin: 10px 0 5px;
  font-weight: 700;
  @media ${device.tablet} {
    font-size: 26px;
  }
`;

const KeyTechPara = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.142857px;
  color: #536083;
`;

export const KeyTechDetails = () => {
  return (
    <KeyTechDetailsWrapper>
      <div>
        <KeyTechHeading>key technologies</KeyTechHeading>
        <KeyTechHeading2>Delivering right solution using latest market tools</KeyTechHeading2>
        <KeyTechPara>
          We deliver talented teams across multiple technologies - from front-end to back-end to
          mobile.
        </KeyTechPara>
      </div>
    </KeyTechDetailsWrapper>
  );
};

export default connector(KeyTechDetails);
