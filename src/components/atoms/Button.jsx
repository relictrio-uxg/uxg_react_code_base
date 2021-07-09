import React from 'react';
import styled from 'styled-components/macro';
import { Image, Icon } from '../atoms';
import { colors, textSize } from '../../theme';

export const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border: none;
  border-radius: ${(props) => props.br};
  padding: ${(props) => props.pd};
  text-transform: uppercase;
  font-size: ${textSize.body2.desktop};
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const Button = ({
  bg,
  br,
  color,
  text,
  action,
  icon,
  image,
  iconcolor,
  opacity,
  mobilesrcfile,
  tabletsrcfile,
  desktopsrcfile,
  pd,
}) => {
  return (
    <ButtonWrapper color={color} bg={bg} br={br} onClick={action} pd={pd}>
      {text}
      {image && (
        <Image
          mobilesrcfile={mobilesrcfile}
          tabletsrcfile={tabletsrcfile}
          desktopsrcfile={desktopsrcfile}
          height={'30px'}
          width={'auto'}
        />
      )}
      {icon && <Icon name={icon} color={iconcolor} opacity={opacity} />}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  color: colors.white,
  bg: colors.primary.orange100,
  pd: '15px 30px',
  text: 'noText',
  mobilesrcfile: '',
  tabletsrcfile: '',
  desktopsrcfile: '',
  action: () => {},
};
