import React from 'react';
import styled from 'styled-components/macro';
import ListFooter from './ListFooter';
// import listFooter from '../../json/footer.json';
import { device } from '../../../theme';
import { footer } from './footerdata';

const FooterWrapper = styled.footer`
  width: 100%;
`;

const ListFooterWrapper = styled.div`
  background: #eff5f5;
  display: flex;
  padding: 0 16px 16px;
  flex-wrap: wrap;

  @media ${device.tablet} {
    padding: 0 40px 26px;
  }
`;

export const Footer = (props) => {
  return (
    <FooterWrapper>
      <ListFooterWrapper>
        {footer.map((item, index) => (
          <ListFooter key={index} {...item} index={index} />
        ))}
      </ListFooterWrapper>
    </FooterWrapper>
  );
};

Footer.defaultProps = {};
