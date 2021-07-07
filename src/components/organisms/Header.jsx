import React from 'react';
import styled from 'styled-components/macro';
import { Logo, NavBar } from '../molecules';
import { colors } from '../../theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { device } from '../../theme';

const HeaderWrapper = styled.div`
  color: ${colors.primary.black75};
  background: #eff5fc;
  padding: 26px 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 80px;
`;

export const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavBar />
    </HeaderWrapper>
  );
};

Header.defaultProps = {};
