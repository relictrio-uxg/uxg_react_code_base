import React from 'react';
import styled from 'styled-components/macro';
import { Image } from '../../atoms/Image';

const InformationContainer = styled.div`
  width: 50%;
  padding: 3rem 2rem;
  margin-bottom: 1rem;
  border-bottom: 4px solid white;
  &:hover {
    border: 0px;
    border-bottom: 4px solid red;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    background: white;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InformationSymbol = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const InformationText = styled.div`
  width: 100%;
  padding: 1rem;
`;

const InfoHeading = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 3rem;
  margin-bottom: 1.5rem;
`;

const InfoSubHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.75rem;
`;

const Cards = ({ otherInfo }) => {
  return (
    <>
      {otherInfo.information.map((pieceOfInfo, index) => {
        return (
          <InformationContainer key={index}>
            <InformationSymbol>
              <Image desktopsrcfile={pieceOfInfo.icon} />
            </InformationSymbol>
            <InformationText>
              <InfoHeading>{pieceOfInfo.title}</InfoHeading>
              <InfoSubHeading>{pieceOfInfo.description}</InfoSubHeading>
            </InformationText>
          </InformationContainer>
        );
      })}
    </>
  );
};

export default Cards;
