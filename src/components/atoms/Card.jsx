import React from 'react';
import styled from 'styled-components/macro';

const CardWrapper = styled.div`
  padding: 4rem;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.pd};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
`;

const Card = ({ children, bg, color, pd, width, maxWidth, maxHeight, minWidth }) => {
  return (
    <CardWrapper
      bg={bg}
      color={color}
      pd={pd}
      width={width}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      minWidth={minWidth}
    >
      {children}
    </CardWrapper>
  );
};

export default Card;
