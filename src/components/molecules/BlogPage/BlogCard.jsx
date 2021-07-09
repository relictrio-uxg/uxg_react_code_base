import React from 'react';
import styled from 'styled-components/macro';

const BlogCardWrapper = styled.div``;

const BlogCardDetails = styled.div`
  padding: 2rem;
`;
const BlogCardHeading = styled.h4`
  color: #3c50e0;
  text-transform: uppercase;
  font-size: 12px;
`;

const BlogCardSubHeading = styled.h2`
  color: #00005c;
  font-size: 16px;
  font-weight: 600;
  margin: 2rem 0;
`;

const BlogCardAuthor = styled.div``;

const BlogCardAuthorDetails = styled.h2`
  color: grey;
  font-size: 16px;
`;

const BlogCardAuthorName = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
`;

const BlogImg = styled.img`
  width: 100%;
`;

const BlogCard = ({ img, heading, subheading, author }) => {
  return (
    <BlogCardWrapper>
      <BlogImg src={img} />
      <BlogCardDetails>
        <BlogCardHeading>{heading}</BlogCardHeading>
        <BlogCardSubHeading>{subheading}</BlogCardSubHeading>

        <BlogCardAuthor>
          <BlogCardAuthorDetails>Written by</BlogCardAuthorDetails>
          <BlogCardAuthorName>{author}</BlogCardAuthorName>
        </BlogCardAuthor>
      </BlogCardDetails>
    </BlogCardWrapper>
  );
};

export default BlogCard;
