import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import HeroTextDiv from '../molecules/HeroTextDiv';
import Card from '../molecules/setup_plans/Card';

import sectionInfo from '../../json/setup_plans.json';
import { Check } from '../../assets/custom-icons/Check';
import { ChevronRight } from '../../assets/custom-icons/ChevronRight';

import './SetupPlans.css';

const SectionWrapper = styled.div`
  width: 100%;
  margin: 3rem 0;
  background-color: #ffffff;
`;

const SectionInnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1300px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const SectionHeader = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
    align-items: flex-start;
  }
`;

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

export const SetupPlans = () => {
  const hidePlanInfo = () => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
      let plans = document.querySelectorAll('.hideAble');
      plans.forEach((plan, index) => {
        if (index > 1) {
          plan.classList.add('hidden');
        }
      });
    } else {
      let plans = document.querySelectorAll('.hideAble');
      plans.forEach((plan, _) => {
        plan.classList.remove('hidden');
      });
    }
  };

  const showOnClick = (planId) => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
      let plans = document.querySelectorAll('.hideAble');
      plans.forEach((plan, _) => {
        plan.classList.add('hidden');
      });

      let plan = document.getElementById(`plan_${planId}`);
      let hiddenPlans = plan.querySelectorAll('.hideAble');
      hiddenPlans.forEach((hiddenPlan) => {
        hiddenPlan.classList.remove('hidden');
      });
    } else return;
  };

  useEffect(() => {
    hidePlanInfo();
    window.addEventListener('resize', hidePlanInfo);
    return () => window.removeEventListener('resize', hidePlanInfo);
  }, []);

  return (
    <SectionWrapper>
      <SectionInnerContainer>
        <SectionHeader>
          <HeroTextDiv
            headText="TAILORED SETUP PLANS"
            heading="Our engagement models for setting up ODC with ease"
            subHeading=" Choosing the right engagement model is one of the most important decisions in any
            Offshore outsourcing engagement"
            buttonTitle=""
          />
        </SectionHeader>
        <PlansContainer>
          <Card sectionInfo={sectionInfo} showOnClick={showOnClick} />
        </PlansContainer>
      </SectionInnerContainer>
    </SectionWrapper>
  );
};
