import React from 'react';
import styled from 'styled-components/macro';
import { Text } from '../../atoms';
import { textSize } from './../../../theme';

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
      <Text
        tag="p"
        text={'Copyright @ relictrio 2015-2020'}
        size="text4"
        color="rgba(83, 96, 131, 0.8)"
      />
      <Text
        tag="p"
        text={'Terms & Conditions'}
        margin="10px"
        color="#536083"
        size="text4"
        bold={true}
      />
      <Text tag="p" text={'Privacy Policy'} color="#536083" size="text4" bold={true} />
    </CopyrightWrapper>
  );
};

export default Copyright;
