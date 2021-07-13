import React from 'react';
import styled from 'styled-components/macro';
import { Text } from '../../atoms';
import { colors, device } from '../../../theme';
import { connect } from 'react-redux';

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 30px;
  }
`;

const Copyright = () => {
  return (
    <CopyrightWrapper>
      <Text tag="p" text={'Copyright @ relictrio 2015-2020'} />
      <Text tag="p" text={'Terms & Conditions'} margin="10px" />
      <Text tag="p" text={'Privacy Policy'} />
    </CopyrightWrapper>
  );
};

export default Copyright;
