import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Button } from './../atoms/Button.jsx';
import { Text } from './../atoms/Text';
import { Link } from 'react-router-dom';
import { device } from '../../theme';
const connectedProps = (state) => ({});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

export const NavbarWrapper = styled.div`
  @media ${device.mobile} {
    display: flex;
    align-items: center;
  }
`;

export const NavItems = styled.div`
  @media ${device.mobile} {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
`;

export const NavItemsList = styled(Link)`
  margin: 0 2rem;
`;

export const NavBar = () => {
  return (
    <NavbarWrapper>
      <NavItems>
        <NavItemsList to="/recruitment">Recruitment</NavItemsList>
        <NavItemsList to="/offshore">Off Shore</NavItemsList>
        <NavItemsList to="/hiredevelopers">Hire Developers</NavItemsList>
        <NavItemsList to="/aboutus">About us</NavItemsList>
        <NavItemsList to="/careers">Careers</NavItemsList>
      </NavItems>
      <Button text="Get Started" bg="#3C50E0" br="4px" />
    </NavbarWrapper>
  );
};

export default connector(NavBar);
