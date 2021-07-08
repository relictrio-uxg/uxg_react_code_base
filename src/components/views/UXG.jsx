import React from 'react';
import styled from 'styled-components/macro';

import { Main } from '../molecules';
import { Header, Footer } from '../organisms';

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
      <Main />
      <Footer />
    </PageWrapper>
  );
};

UXG.defaultProps = {
  selected: false,
};

export default connector(UXG);
