import React from 'react';
import styled from 'styled-components/macro';
import { Logo, NavBar } from '../molecules';
import { colors } from '../../theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { device } from '../../theme';
import Navbar from './../molecules/Nav/Navbar';

const HeaderWrapper = styled.div`
  color: ${colors.primary.black75};
  background: #eff5fc;
  padding: 26px 40px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar />
    </HeaderWrapper>
  );
};

Header.defaultProps = {};
