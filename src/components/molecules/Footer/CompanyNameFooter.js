import React from 'react';
import styled from 'styled-components/macro';
import { Text, Image } from '../../atoms';
import uxGurusLogo from './../../../assets/uxgurus/logo_uxGurus.png';
import { colors, device } from '../../../theme';
import { connect } from 'react-redux';

const CompanyNameFooterWrapper = styled.div`
  max-width: 30%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 172px;
`;

const CompanyAddress = styled.p`
  font-size: 14px;
  line-height: 23px;
  width: 100%;
  margin: 1rem;
  color: #536083;
`;

const CompanyNameFooter = () => {
  return (
    <CompanyNameFooterWrapper>
      <ImageWrapper>
        <Image mobilesrcfile={uxGurusLogo} />
      </ImageWrapper>
      <CompanyAddress>Horamavu Main Road, Bengaluru - 560043, Karnataka, India</CompanyAddress>
    </CompanyNameFooterWrapper>
  );
};

export default CompanyNameFooter;
