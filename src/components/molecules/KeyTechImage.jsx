import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Image } from './../atoms';
import TechImage from './../../assets/uxgurus/Webp.net-compress-image-3.jpg';
const connectedProps = (state) => ({
  user: state,
});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

const KeyTechImageWrapper = styled.div`
  margin: 2rem 0;
`;

export const KeyTechImage = () => {
  return (
    <KeyTechImageWrapper>
      <Image desktopsrcfile={TechImage} maxWidth="421px" maxHeight="451px" />
    </KeyTechImageWrapper>
  );
};

export default connector(KeyTechImage);
