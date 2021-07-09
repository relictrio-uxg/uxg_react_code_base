import * as React from 'react';
import styled from 'styled-components/macro';

export const PictureWrapper = styled.picture`
  display: flex;
  height: auto;
`;

const Img = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};

  ${(props) =>
    props.cover &&
    `
      object-fit: cover;
      object-position: ${props.position || 'center'};
      height: 100%;
      left : ${props.left} || '0';
    `}
`;

export const Image = ({
  id,
  mobilesrcfile,
  tabletsrcfile,
  desktopsrcfile,
  height,
  width,
  maxWidth,
  maxHeight,
  minWidth,
}) => {
  return (
    <PictureWrapper>
      <source media="(min-width: 960px)" srcSet={desktopsrcfile} />
      <source media="(min-width: 640px)" srcSet={tabletsrcfile || desktopsrcfile} />
      <source media="(min-width: 320px)" srcSet={mobilesrcfile || desktopsrcfile} />
      <Img
        id={id}
        src={desktopsrcfile}
        height={height}
        width={width}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        minWidth={minWidth}
      />
    </PictureWrapper>
  );
};

Image.defaultProps = {
  mobilesrcfile: '',
  tabletsrcfile: '',
  desktopsrcfile: '',
  height: '100%',
  width: '100%',
  maxWidth: '',
  maxHeight: '',
  minWidth: '',
  id: '',
};
