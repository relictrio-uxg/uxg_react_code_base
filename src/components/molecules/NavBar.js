import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Button } from './../atoms/Button.jsx';

const connectedProps = (state) => ({});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavItemsList = styled.li`
  margin: 0 2rem;
`;

export const NavBar = () => {
  return (
    <NavbarWrapper>
      <NavItems>
        <NavItemsList>Recruitment</NavItemsList>
        <NavItemsList>Off Shore</NavItemsList>
        <NavItemsList>Hire Developers</NavItemsList>
        <NavItemsList>About us</NavItemsList>
        <NavItemsList>Careers</NavItemsList>
      </NavItems>
      <Button text="Get Started" bg="#3C50E0" br="4px" />
    </NavbarWrapper>
  );
};

export default connector(NavBar);
