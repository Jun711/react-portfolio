import styled, { css } from 'styled-components';
import { Div, FixWidthFlexContainer, FixWidthRelContainer, Flex } from '../../theme/grid';
import { UnderlineA } from '../../theme/animatedTags';
import { blue, charcoal, orange, themeColor, white, yellow } from '../../theme/colors';
import { media } from '../../theme/media';

export const ButtonFlex = styled(Flex)`
  height: 4em;
  width: 4em;
  background-color: ${blue};
  color: ${orange};
   border-radius: 50%;
`;

export const ProjectContainer = styled.div`
  background-color: ${white};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  z-index: 100;
  text-align: center; 
  transition: transform 0.7s ease-in-out, opacity 1s ease-in-out;
  
  ${({hide}) => hide && css`
    opacity: 0;
    transform: translateX(100%);
  `}
`;

export const Content = styled(FixWidthRelContainer)``;

export const FixWidthProjContainer = styled(FixWidthRelContainer)`
  background-color: ${white};
  overflow: scroll;
  height: 100vh;
  padding-top: 80px;
  ${media.tablet`
    padding-top: 55px;
  `}
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  z-index: 101;
  top: 60px;
  right: 60px;
 
  ${media.tablet`
    top: 5px;
    right: 5px;
  `}
`;

export const ProjectDetailContainer = styled(FixWidthFlexContainer)`
  padding: 0;
  flex-wrap: wrap; 
  h3 {
    text-align: center;
    margin: 0;
    font-size: 1em;
  }
`;

export const InfoSet = styled(Div)`
  height: 700px;
  width: 450px;
  ${media.tablet`
    width: 300px;
  `}
  ${media.tablet`
    width: 450px;
  `}
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  vertical-align: middle;
  position: relative; 
  display: block;   
  
  h3 {
    // color: ${charcoal};
  }
`;

export const ProjectImage = styled.img`
  border: 1px solid ${themeColor};
  height: 600px;
  width: 330px;
  // ${media.larger`
  //   height: 450px;
  //   width: 250px;
  // `}
  // ${media.desktop`
  //   height: 500px;
  //   width: 220px;
  // `}
  // ${media.tablet`
  //   height: 320px;
  //   width: 170px;
  // `}
  // ${media.phone`
  //   height: 500px;
  //   width: 300px;
  // `}
`;

export const DescContainer = styled(Flex)`
  height: 600px;
  padding: 0;
  margin: 0;
  ${media.tablet`
    justify-content: flex-start;
  `}
`

export const ProjectURL = styled(UnderlineA)`
  font-size: 20px
`;

export const DescItem = styled.li`
  font-size: 20px;
  text-align: left;
`;

export const DescGrid = styled.ul``;