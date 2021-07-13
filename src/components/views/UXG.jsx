import React from 'react';
import styled from 'styled-components/macro';
import {
  Header,
  Home,
  CostSavings,
  KeyTechnologies,
  BluePage,
  LatestBlog,
  ODC,
  HowWeWork,
  WhyUs,
  SetupPlans,
  Footer,
} from '../organisms';

import { connect } from 'react-redux';

const connectedProps = (state) => ({
  settingsOpen: state.common.settingsOpen,
});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

const PageWrapper = styled.div``;

export const UXG = (props) => {
  return (
    <PageWrapper>
      {!props.preview && (
        <>
          <Header />
        </>
      )}
      <Home />
      <ODC />
      <HowWeWork />
      <WhyUs />
      <SetupPlans />
      <CostSavings />
      <KeyTechnologies />
      <BluePage />
      <LatestBlog />
      <Footer />
    </PageWrapper>
  );
};

UXG.defaultProps = {
  selected: false,
};

export default connector(UXG);
