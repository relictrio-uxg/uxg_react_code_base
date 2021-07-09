import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Button } from './../atoms/Button.jsx';
const connectedProps = (state) => ({
  user: state,
});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

const LeftBlogPageWrapper = styled.div`
  width: 25%;
`;

const LeftBlogPageHeading = styled.h4``;

const LeftBlogPageDesc = styled.p``;

const LeftBlogPage = () => {
  return (
    <LeftBlogPageWrapper>
      <LeftBlogPageHeading>LATEST BLOGS</LeftBlogPageHeading>
      <LeftBlogPageDesc>Our recent articles for you to read</LeftBlogPageDesc>
      <Button>View More</Button>
    </LeftBlogPageWrapper>
  );
};

export default connector(LeftBlogPage);
