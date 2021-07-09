import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { Button } from '../../atoms/Button.jsx';
const connectedProps = (state) => ({
  user: state,
});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

const LeftBlogPageWrapper = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 5rem;
  @media (max-width: 600px) {
    margin-bottom: 5rem;
    min-width: 100%;
  }
`;

const LeftBlogPageHeading = styled.h4`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #3c50e0;
  font-weight: 600;
`;

const LeftBlogPageDesc = styled.h5`
  font-size: 22px;
  line-height: 34px;
  color: #00005c;
  margin: 25px 0 40px;
  font-weight: 750;
`;

export const LeftBlogPage = () => {
  return (
    <LeftBlogPageWrapper>
      <LeftBlogPageHeading>LATEST BLOGS</LeftBlogPageHeading>
      <LeftBlogPageDesc>Our recent articles for you to read</LeftBlogPageDesc>
      <Button text="View More" pd="15px 30px" br="4px" bg="#3c50e0"></Button>
    </LeftBlogPageWrapper>
  );
};

export default connector(LeftBlogPage);
