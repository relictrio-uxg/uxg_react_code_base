import React from 'react';
import styled from 'styled-components/macro';
import { Button } from '../atoms';

import { colors, device } from '../../theme';

import { connect } from "react-redux";
import { toggleSettings } from "./../../redux/common/action";

const connectedProps = (state) => ({
  settingsOpen: state.common.settingsOpen,
  userProfileOpen: state.common.userProfileOpen
});

const connectionActions = {
  toggleSettings: toggleSettings
}

var connector = connect(connectedProps, connectionActions);

export const NavWrapper = styled.nav`
  width: 50%;
`;

export const NavUnorderListWrapper = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const NavListWrapper = styled.li`
  &:first-child{
    button{
      padding-left: 25px;
      @media only screen and ${device.mobileL} {
        padding-left: 0px;
      }
    }
  }
  img{
    width: 24px;
    height: 24px;
    margin: 0 25px 0 25px;
    @media only screen and ${device.tabletM}{
      margin: 0 25px;
    }
  }
  @media only screen and ${device.mobileL} {
    &:first-child span{
      display: block;
    }
  }
`;

export const LinkWrapper = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-left: 25px;
  button{
    padding-left: 0;
    padding-right: 0;
    text-indent: -99999em;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-transform: none;
    @media only screen and ${device.tabletM} {
      text-indent: 0;
      div{
        margin-left: 25px;
      }
    }
  }
`;

export const TextWrapper = styled.span`
  text-align: right;
  white-space: nowrap;
  display: none;
  strong{
    display: block;
  }
  @media only screen and ${device.tabletM} {
    display: block;
  }
`;

export const ActiveWrapper = styled.span`
  height: 8px;
  width: 100%;
  background: ${colors.primary.redp2};
  position: absolute;
  left: 0;
  bottom: -6px;
  @media only screen and ${device.mobileL} {
    bottom: -21px;
  }
`

export const RightHeader = (props) => {
  return (
    <NavWrapper>
      <NavUnorderListWrapper>
        <NavListWrapper>
          <LinkWrapper onClick={() => props.toggleSettings()}>
            <Button text="Settings" icon="settings" iconcolor={colors.fontcolor} color={colors.fontcolor} bg={colors.transparent} />
            {props.settingsOpen && <ActiveWrapper></ActiveWrapper>}
          </LinkWrapper>
        </NavListWrapper>
      </NavUnorderListWrapper>
    </NavWrapper>
  );
};

RightHeader.defaultProps = {
  
};

export default connector(RightHeader);