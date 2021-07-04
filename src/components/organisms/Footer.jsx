import React from 'react';
import styled from 'styled-components/macro';
import { ListFooter } from "./../molecules";
import listFooter from "../../json/footer.json";
import { device } from '../../theme';

const FooterWrapper = styled.footer`
    
`;

const ListFooterWrapper = styled.div`
  background: #eff5f;
  display: flex;
  padding: 16px;
  flex-wrap: wrap;

  @media ${device.tablet} {
		padding: 26px 40px;
	}
`

export const Footer = (props) => {
  return <FooterWrapper>
       <ListFooterWrapper>
       { listFooter.footer.map((item, index) => <ListFooter key={index} {...item} index={index}/> )} 
       </ListFooterWrapper>
  </FooterWrapper>;
};

Footer.defaultProps = {
};
