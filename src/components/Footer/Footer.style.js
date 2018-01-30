import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { blue, themeColor, white } from '../../theme/variables';

export const SocialMediaContainer = styled(Flex)`
  h3 {
    margin-top: 0;
    color: ${white};
  }
  
`;

export const FooterContainer = styled(Flex)`
  flex-wrap: wrap; 
  right: 0;
  left: 0;
  bottom: 0;
  height: 11em;
  background-color: ${themeColor};
  align-content: center;
  align-items: center;
  
  transition: color .3s;
  
  i {
    text-align: center
  }

  div {
   display: inline-block;
   padding-left: 7px;
   padding-right: 7px;
  }
  
  a {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    border-radius: 100%;
    font-size: 25px;
    line-height: 55px;
    text-align: center;
    vertical-align: middle;
    color: white;
    transition: background-color .3s ease-in-out;
  }
  a:hover {
    background-color: ${white};
    color: ${blue};
  }
`;

