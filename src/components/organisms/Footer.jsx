import React from 'react';
import styled from 'styled-components/macro';
import FooterHead from './../molecules/Footer/FooterHead';
import { device } from './../../theme.js';
import Copyright from './../molecules/Footer/Copyright';

const FooterWrapper = styled.footer`
  background: #f0f5fc;
  padding: 110px 0 80px;
`;

const ListFooterWrapper = styled.div`
  background: #f0f5fc;
  display: flex;

  flex-wrap: wrap;

  @media ${device.tablet} {
    padding: 26px 40px;
  }
`;

export const Footer = (props) => {
  return (
    <FooterWrapper>
      <FooterHead />
      <Copyright />
    </FooterWrapper>
  );
};

Footer.defaultProps = {};
