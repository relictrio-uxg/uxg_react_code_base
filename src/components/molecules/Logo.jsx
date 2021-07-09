import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../../theme';
import { Image } from '../atoms';
import uxGurusLogo from '../../assets/uxgurus/logo_uxGurus.png';
import { Link } from 'react-router-dom';

export const LogoHeadingWrapper = styled.div`
  width: 100%;
  max-width: 172px;
  height: 40px;
  /* @media ${device.tabletM} {
    width: 172px;
  } */
`;

export const LinkWrapper = styled(Link)`
  /* float: left; */
  width: 100%;
  height: 100%;
`;

export const Logo = ({
  redirectionPath,
  titleInfo,
  mobilesrcfile,
  tabletsrcfile,
  desktopsrcfile,
}) => {
  return (
    <LogoHeadingWrapper>
      <LinkWrapper to={redirectionPath} title={titleInfo}>
        <Image
          mobilesrcfile={mobilesrcfile}
          tabletsrcfile={tabletsrcfile}
          desktopsrcfile={desktopsrcfile}
        />
      </LinkWrapper>
    </LogoHeadingWrapper>
  );
};

Logo.defaultProps = {
  redirectionPath: '/',
  titleInfo: 'title',
  mobilesrcfile: uxGurusLogo,
  tabletsrcfile: uxGurusLogo,
  desktopsrcfile: uxGurusLogo,
};
