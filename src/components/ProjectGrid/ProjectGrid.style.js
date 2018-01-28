import styled, { css } from 'styled-components';
import { Wrapper, Flex, Div, Grid } from '../../theme/grid';
import { media } from "../../theme/media";
import { red, yellow, THEME_COLOR, white, blue } from '../../theme/variables';

export const Title = styled.h1`
  color: ${red};
  font-weight: bold;
  margin-top: 0;
`;

export const ProjectWrapper = styled(Wrapper)`
  background-color: ${blue};
`;

export const ProjectContainer = styled(Grid)`
  padding: 0;
  margin: 0;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 300px);
  background-color: ${red};
  width: 1170px;
  min-height: 30vh;
  margin: 4vh auto;
  border: 1px solid white;   
  overflow: visible;
 
  ${media.larger`
    grid-template-columns: repeat(auto-fit, 250px);  
    width: 90vw;
  `}
  ${media.desktop`
    grid-template-columns: repeat(auto-fit, 220px);    
    width: 90vw;
  `}
  ${media.tablet`
    grid-template-columns: repeat(auto-fit, 170px); 
    width: 90vw;
  `}
  ${media.phone`
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 0px 0px;   
  `}
  
  h3 {
    text-align: center;
    color: black;
    
    font-size: 2em;
  }
`;

export const ProjectItem = styled(Div)`
  // padding: 5px;
  height: 300px;
  width: 300px;
  line-height: 300px;
  // margin: 10px;
  ${media.larger`
    height: 250px;
    width: 250px;
    line-height: 250px;
  `}
  ${media.desktop`
    height: 220px;
    width: 220px;
    line-height: 220px;
  `}
  ${media.tablet`
    height: 170px;
    width: 170px;
    line-height: 170px;  
    font-size: 2em;
  `}
  ${media.phone`
    height: 300px;
    width: 300px;
    line-height: 300px;  
    font-size: 2em;
  `}
  background-color: ${yellow};
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
  vertical-align: middle;
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
        background-color: ${THEME_COLOR};
        z-index: 2; 
      }
  }
`;