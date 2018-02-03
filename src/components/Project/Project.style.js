import styled, { css } from 'styled-components';
import { Div, FixedWidthFlexContainer, FixedWidthRelContainer, Flex } from '../../theme/grid';
import { UnderlineA } from '../../theme/animatedTags';
import { themeColor, white } from '../../theme/colors';
import { media } from '../../theme/media';

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

export const Content = styled(FixedWidthRelContainer)``;

export const FixedWidthProjContainer = styled(FixedWidthRelContainer)`
  overflow: scroll;
  height: 100vh;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  z-index: 101;
  top: 35px;
  right: 50px;
 
  ${media.tablet`
    top: 5px;
    right: 5px;
  `}
`;

export const ProjectDetailContainer = styled(FixedWidthFlexContainer)`
  padding: 0;
  flex-wrap: wrap; 
  h3 {
    text-align: center;
    margin: 0;
    font-size: 1em;
  }
`;

export const InfoSet = styled(Div)`
  height: 100vh;
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
`;

export const ProjectImage = styled.img`
  border: 1px solid ${themeColor};
  height: 550px;
  width: 330px;
`;

export const DescContainer = styled(Flex)`
  padding: 0;
  margin: 0;
  ${media.tablet`
    justify-content: flex-start;
  `}
`

export const ProjectURL = styled(UnderlineA)``;

export const DescItem = styled.li`
  text-align: left;
`;

export const DescGrid = styled.ul`
  margin-top: 0px;
`;