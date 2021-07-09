import React from 'react';
import styled from 'styled-components/macro';
import { LeftBlogPage } from './../molecules';

const LatestBlogWrapper = styled.div`
  padding: 26px 40px;
  width: 100%;
  /* height: 80px; */
`;

export const LatestBlog = () => {
  return (
    <LatestBlogWrapper>
      <LeftBlogPage />
    </LatestBlogWrapper>
  );
};
