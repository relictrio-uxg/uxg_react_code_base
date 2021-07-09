import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import Carousel from '../Carousel/Carousel';

const connectedProps = (state) => ({
  user: state,
});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

export const RightBlogPageHeading = () => {
  return (
    <>
      <Carousel />
    </>
  );
};

export default connector(RightBlogPageHeading);
