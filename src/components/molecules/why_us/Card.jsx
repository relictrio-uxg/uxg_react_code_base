import React from 'react';
import styled from 'styled-components/macro';
import { Image } from '../../atoms/Image';
import { SwiperSlide } from 'swiper/react';

const InformationCard = styled.div`
  width: calc(100% - 5.25rem);
  min-height: 420px;
  height: fit-content;
  max-height: 700px;
  padding: 1rem 3rem;
  margin: 0.5rem 0;
  border-radius: 12px;
  box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
`;

const Text = styled.h2`
  font-size: 2rem;
  line-height: 2.8rem;
  color: #00005c;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const SubText = styled.h3`
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: #536083;
  font-weight: 400;
`;

const IconContainer = styled.div`
  margin: 4rem 0 3rem 0;
  height: 5rem;
`;

const Card = ({ pieceOfInfo }) => {
  return (
    <InformationCard style={{ background: pieceOfInfo.color }}>
      <IconContainer>
        <Image desktopsrcfile={pieceOfInfo.icon} height="auto" width="32px" />
      </IconContainer>
      <Text>{pieceOfInfo.title}</Text>
      <SubText>{pieceOfInfo.description}</SubText>
    </InformationCard>
  );
};

export default Card;
