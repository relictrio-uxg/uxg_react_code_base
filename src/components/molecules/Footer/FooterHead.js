import React from 'react';
import styled from 'styled-components/macro';
import CompanyNameFooter from './CompanyNameFooter';
import { Footer } from './FooterDetails';

const FooterHeadWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterHead = () => {
  return (
    <FooterHeadWrapper>
      <CompanyNameFooter />
      <Footer />
    </FooterHeadWrapper>
  );
};

export default FooterHead;
