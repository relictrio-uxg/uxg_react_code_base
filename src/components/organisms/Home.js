import React from 'react';
import styled from 'styled-components/macro';
import { Button } from './../atoms/Button';
import { connect } from 'react-redux';
import { Image } from './../atoms/Image';
import PeopleImage from './../../assets/uxgurus/peopleImage.png';

const connectedProps = (state) => ({});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);
const HomeWrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 80vh;
`;

const HomeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HomeImage = styled.div`
  /* max-width: 80%; */
`;

const HomeHeading = styled.h1``;

const HomePara = styled.p``;

const HomeButton = styled.div``;

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeDetails>
        <HomeHeading>Your Personalised Offshore Partner</HomeHeading>
        <HomePara>
          If you are worried about your development costs skyrocketing and find it difficult to
          manage it, then we are here to help you.
        </HomePara>
        <HomeButton>
          <Button text="Get in Touch" bg="#3C50E0" br="4px" />
        </HomeButton>
      </HomeDetails>
      <HomeImage>
        <Image desktopsrcfile={PeopleImage} height="520px" width="680px" />
      </HomeImage>
    </HomeWrapper>
  );
};

export default connector(Home);
