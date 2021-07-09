import React from 'react';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { device } from '../../theme';

const connectedProps = (state) => ({
  user: state,
});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

const LeftCostSavingsWrapper = styled.div`
  width: 60%;
  @media ${device.mobile} {
    width: 100%;
  }
`;
const LeftCostSavingsHeading = styled.h4`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #ffbcbd;
`;
const LeftCostSavingsSubHeading = styled.h5`
  margin: 25px 0 15px;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
`;
const LeftCostSavingsDesc = styled.p`
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 35px;
  color: #ebf3ff;
`;

const LeftCostSavingsCalclistcont = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const LeftCostSavingsCalclist = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 40%;
`;
const LeftCostSavingsCalclabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  color: #ffbcbd;
  /* width: 30%; */
  float: left;
  margin-bottom: 20px;
`;
const LeftCostSavingsPeople = styled.select`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #ffbcbd;
  -webkit-appearance: none;
  background: #ff5670 url(./../../assets/uxgurus/down__arrow.png) no-repeat right center;
  border: none;
  border-bottom: solid 1px #fff;
  border-radius: 0;
  padding-bottom: 7px;
  width: 100%;
`;
const LeftCostSavingsOption = styled.option``;

const LeftCostSavingsButton = styled.button`
  display: inline-block;

  color: #3c50e0;
  padding: 16px 10px;
  border: solid 1px #ffff;
  background: #ffff;
  border-radius: 8px;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.142857px;
  min-width: 175px;
  cursor: pointer;
`;

export const LeftCostSavings = (props) => {
  return (
    <LeftCostSavingsWrapper>
      <LeftCostSavingsHeading>KNOW YOUR COST</LeftCostSavingsHeading>
      <LeftCostSavingsSubHeading>Remarkable cost savings</LeftCostSavingsSubHeading>
      <LeftCostSavingsDesc>
        Offshore development reduces bottlenecks of keeping extra staff in your own office,
        eliminating factors such as payroll, bookkeeping and health benefit costs. The cost of labor
        in India is lower than in other countries.
      </LeftCostSavingsDesc>
      <LeftCostSavingsCalclistcont>
        <LeftCostSavingsCalclist>
          <LeftCostSavingsCalclabel>TEAM SIZE</LeftCostSavingsCalclabel>
          <LeftCostSavingsPeople>
            <LeftCostSavingsOption>1 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>2 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>3 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>4 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>5 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>6 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>7 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>8 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>9 People</LeftCostSavingsOption>
            <LeftCostSavingsOption>10 People</LeftCostSavingsOption>
          </LeftCostSavingsPeople>
        </LeftCostSavingsCalclist>
        <LeftCostSavingsCalclist>
          <LeftCostSavingsCalclabel>TEAM HOURLY COST</LeftCostSavingsCalclabel>
          <LeftCostSavingsPeople>
            <LeftCostSavingsOption>$ 10</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 15</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 20</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 25</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 30</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 35</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 40</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 45</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 10</LeftCostSavingsOption>
            <LeftCostSavingsOption>$ 10</LeftCostSavingsOption>
          </LeftCostSavingsPeople>
        </LeftCostSavingsCalclist>
      </LeftCostSavingsCalclistcont>
      <LeftCostSavingsButton>Calculate now</LeftCostSavingsButton>
    </LeftCostSavingsWrapper>
  );
};

export default connector(LeftCostSavings);
