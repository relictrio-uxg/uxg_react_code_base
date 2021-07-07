import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './../atoms/Button.jsx';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  li {
    padding: 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #eff5fc;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    li {
      color: #00005c;
    }
  }
`;
const StyledLink = styled(Link)``;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <StyledLink to="/recruitment">Recruitment</StyledLink>
      </li>
      <li>
        <StyledLink to="/offshore">Off Shore</StyledLink>
      </li>
      <li>
        <StyledLink to="/hiredevelopers">Hire Developers</StyledLink>
      </li>
      <li>
        <StyledLink to="/aboutus">About us</StyledLink>
      </li>
      <li>
        <StyledLink to="/careers">Careers</StyledLink>
      </li>
      <Button text="Get Started" bg="#3C50E0" br="4px" />
    </Ul>
  );
};

export default RightNav;
