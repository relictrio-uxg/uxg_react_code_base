import React from 'react';
import styled from 'styled-components/macro';
import { Text } from '../atoms';
import { colors, device } from '../../theme';
import { connect } from "react-redux";

const connectedProps = (state) => ({
  user: state
});

const connectionActions = {
}

var connector = connect(connectedProps, connectionActions);

const ListFooterWrapper = styled.div`
    flex: 1;
    min-width: 230px;
`;

const TextWrapper = styled.div`
    font-weight: 500;
    font-size: 16px;
    margin-right: 0px;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #fff;
    border-bottom:1px solid #FF9191;

    @media ${device.tablet} {
      margin-right: ${(props) => props.even === 0 ? '24px': ''};
    }
  
    @media ${device.laptop} {
      margin-right: ${(props) => props.last ? '': '24px'};
    }
`;

const ItemSection = styled.div`
    font-size: 16px;
    margin-right: 0px;
    margin-bottom: 10px;
    border-bottom:1px solid ${colors.fontcolor};

    @media ${device.tablet} {
      margin-right: ${(props) => props.even === 0 ? '24px': ''};
    }
  
    @media ${device.laptop} {
      margin-right: ${(props) => props.last ? '': '24px'};
    }
`;

const ListFooter = (props) => {
  return <ListFooterWrapper>
        <TextWrapper even={props.index % 2} last={props.list?.length === props.index + 1}>
          <Text tag="p" text={props.head} color={colors.fontcolor}/> 
        </TextWrapper>
        { props.list.map((item, index) => <ItemSection key={index} even={props.index % 2} last={props.list?.length === props.index + 1}>
          <Text tag="p" text={item.label} color={colors.fontcolor}/>
        </ItemSection>)}
  </ListFooterWrapper>;
};

ListFooter.defaultProps = {
};

export default connector(ListFooter);

