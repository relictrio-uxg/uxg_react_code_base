import React from 'react';
import styled from 'styled-components/macro';
import { LeftBlogPage } from './../molecules/BlogPage/LeftBlogPage';
import { RightBlogPageHeading } from './../molecules/BlogPage/RightBlogPage';

const LatestBlogWrapper = styled.section`
  padding: 26px 40px;
  width: 100%;
  display: flex;
  height: 100vh;
  @media (max-width: 600px) {
    /* flex-direction: column; */
  }
`;

export const LatestBlog = () => {
  return (
    <LatestBlogWrapper>
      <LeftBlogPage />
      <RightBlogPageHeading />
    </LatestBlogWrapper>
  );
};
