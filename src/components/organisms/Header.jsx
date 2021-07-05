import React from 'react';
import styled from 'styled-components/macro';
import { Logo, RightHeader, NavBar } from '../molecules';

import { colors } from '../../theme';

const HeaderWrapper = styled.div`
  color: ${colors.primary.black75};
  background: #eff5fc;
  padding: 20px 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
`;

export const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavBar />
      {/* <RightHeader /> */}
    </HeaderWrapper>
  );
};

Header.defaultProps = {};
