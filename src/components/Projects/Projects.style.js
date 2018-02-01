import styled, { css } from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { media } from "../../theme/media";
import { red, yellow, themeColor, white, blue } from '../../theme/variables';

export const Title = styled.h1`
  color: ${red};
  font-weight: bold;
  margin-top: 0;
`;

export const ProjectWrapper = styled(Div)`
  background-color: ${blue};;
  width: 100%; 
`;

export const ProjectContainer = styled(Flex)`
  padding: 0;
  margin: 0;
  flex-wrap: wrap; 
  background-color: ${red};
  margin: 0 auto;   
  width: 1100px;
  ${media.larger`
    width: 90vw;
  `}
  
  h3 {
    text-align: center;
    color: black;
    
    font-size: 2em;
  }
`;

export const ProjectItem = styled(Div)`
  padding: 5px;
  height: 300px;
  width: 300px;
  margin: 10px;
  background-color: ${yellow};
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  vertical-align: middle;
  line-height: 300px;
  position: relative; 
  display: block;   
 
   &:hover {
      &:after {
        content: ' Overlay ';
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        color: ${blue};
        background-color: ${themeColor};
        z-index: 2; 
      }
  }
`;