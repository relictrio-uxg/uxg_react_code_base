import React from 'react';
import styled from 'styled-components/macro';

import { Check } from '../../../assets/custom-icons/Check';
import { ChevronRight } from '../../../assets/custom-icons/ChevronRight';

const PlansContainer = styled.div`
  width: 100%;
  margin: 5rem 0 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;
  @media (max-width: 1170px) {
    gap: 2rem;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 5rem auto 2rem auto;
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 80%;
  display: block;
  margin: 2rem auto;
  color: #fff;
  background: #3c50e0;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 1.75rem 0;
  font-size: 1.6rem;
  letter-spacing: 0.6px;
  font-weight: 600;
`;

const PlanHeaderPreTitleText = styled.h6`
  font-size: 1.2rem;
  line-height: 1.3rem;
  letter-spacing: 0.5px;
  color: #3c50e0;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  margin: 4.5rem auto 1.5rem auto;
`;

const PlanHeaderTitleText = styled.h3`
  font-size: 2rem;
  width: 80%;
  max-width: 90%;
  margin: 1rem auto 4rem auto;
  line-height: 2.5rem;
  color: #00005c;
  font-weight: 700;
  text-align: center;
`;

const FeatureTextContainer = styled.div`
  font-size: 1.35rem;
  color: #536083;
`;

const Text = styled.div`
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: 600;
  color: #536083;
  letter-spacing: 0.5px;
`;

const Plan = styled.div`
  width: 100%;
  box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
  border-radius: 24px;
  background: #ffffff;
  cursor: pointer;
  transition: background 0.4s ease, transform 0.4s ease;
  transform: scale(0.98);

  &:hover {
    background: #3c50e0;
    transform: scale(1);
  }

  &:hover ${Button} {
    background: #ffffff;
    color: #3c50e0;
  }

  &:hover ${PlanHeaderPreTitleText} {
    color: #8da4ff;
  }

  &:hover ${PlanHeaderTitleText} {
    color: #ffffff;
  }

  &:hover ${FeatureTextContainer} {
    color: #ffffff;
  }

  &:hover ${Text} {
    color: #ffffff;
  }

  &:hover svg path {
    stroke: #ffffff;
  }
`;

const PlanHeader = styled.div`
  width: 100%;
`;

const PlanInfo = styled.div`
  width: 100%;
  margin: 4rem 0;
`;

const PlanFooter = styled.div`
  width: 100%;
`;

const FeatureContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin: 2rem auto 2.5rem auto;
`;

const CheckIconContainer = styled.div`
  flex: 0 0 10%;
`;

const Break = styled.div`
  height: 1px;
  width: 100%;
  background: #e0e4f0;
`;

const MoreInfo = styled.div`
  width: 80%;
  margin: 2rem auto 3rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Card = ({ sectionInfo, showOnClick }) => {
  return (
    <>
      {sectionInfo.information.map((pieceOfInfo, index) => {
        return (
          <Plan key={index} id={`plan_${index}`} onClick={showOnClick.bind(null, index)}>
            <PlanHeader>
              <PlanHeaderPreTitleText>{pieceOfInfo['pre-title']}</PlanHeaderPreTitleText>
              <PlanHeaderTitleText>{pieceOfInfo.title}</PlanHeaderTitleText>
            </PlanHeader>
            <PlanInfo className="hideAble">
              {pieceOfInfo.features.map((feature, index) => {
                return (
                  <FeatureContainer key={index}>
                    <CheckIconContainer>
                      <Check color="#3BBE73" style={{ verticalAlign: 'text-top' }} />
                    </CheckIconContainer>
                    <FeatureTextContainer>{feature}</FeatureTextContainer>
                  </FeatureContainer>
                );
              })}
            </PlanInfo>
            <PlanFooter className="hideAble">
              <Button>Select this Plan</Button>
              <Break />
              <MoreInfo>
                <Text>Get more information</Text>
                <ChevronRight color="#536083" style={{ marginRight: '1rem' }} />
              </MoreInfo>
            </PlanFooter>
          </Plan>
        );
      })}
    </>
  );
};

export default Card;
