import React from 'react';
import styled from 'styled-components/macro';
import { Button } from './../atoms/Button';
import { connect } from 'react-redux';
import { Image } from './../atoms/Image';
import { Text } from './../atoms/Text';
import PeopleImage from './../../assets/uxgurus/peopleImage.png';
import { device } from '../../theme';

const connectedProps = (state) => ({});

const connectionActions = {};

var connector = connect(connectedProps, connectionActions);

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  min-height: 50vh;
  padding: 26px 40px;
  background: #eff5fc;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const HomeDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.mobile} {
    margin-bottom: 2rem;
  }
`;

const HomeImage = styled.div`
  /* max-width: 80%; */
`;

const HomeHeading = styled.h2``;

const HomePara = styled.p`
  margin: 2rem 0;
`;

const HomeButton = styled.div``;

export const Home = () => {
  return (
    <HomeWrapper>
      <HomeDetails>
        <HomeHeading>
          <Text
            size="text2"
            line-height="text2"
            bold="true"
            font-weight="800"
            color="#00005c"
            text="Your Personalised Offshore Partner"
          />
        </HomeHeading>
        <HomePara>
          <Text
            size="text3"
            line-height="text2"
            bold="true"
            font-weight="800"
            color="#536083"
            text=" If you are worried about your development costs skyrocketing and find it difficult to
          manage it, then we are here to help you."
          />
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
