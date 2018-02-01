import styled, { css } from 'styled-components';
import { Div, Grid, Wrapper } from '../../theme/grid';
import { media, mediaBeyond } from '../../theme/media';
import { lightThemeColor, midThemeColor, red, themeColor, white } from '../../theme/variables';

export const Title = styled.h1`
  color: ${red};
  font-weight: bold;
  margin-top: 0;
`;

export const ProjectWrapper = styled(Wrapper)`
`;

export const ProjectContainer = styled(Grid)`
  // padding: 2em 0;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 300px);
  width: 1100px;
  min-height: 30vh;
  margin: 3vh auto;
 
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
`;

export const ProjectCover = styled.img`
  height: 300px;
  width: 300px;
  ${media.larger`
    height: 250px;
    width: 250px;
  `}
  ${media.desktop`
    height: 220px;
    width: 220px;
  `}
  ${media.tablet`
    height: 170px;
    width: 170px;
  `}
  ${media.phone`
    height: 300px;
    width: 300px;
  `}
`;

export const ProjectItem = styled(Div)`
  height: 300px;
  width: 300px;
  line-height: 300px;
  font-size: 2em;
  border: 1px solid ${themeColor};
  background-color: ${lightThemeColor};
  color: white;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  position: relative; 
  display: block; 
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
    font-size: 1.5em;
  `}
  ${media.phone`
    height: 300px;
    width: 300px;
    line-height: 300px;  
    font-size: 1.5em;
  `}
    
  
  ${({hoverContent}) => hoverContent && css`
     
    ${media.larger`
      font-size: 25px;
    `}
    ${media.desktop`
      font-size: 21px;
    `}
    ${media.tablet`
      font-size: 18px;
    `}
    ${media.phone`
      font-size: 25px;
    `}
    ${mediaBeyond.tablet`
      &:hover {
        &:after {
          content: attr(data-content);
          cursor: pointer;
          opacity: 0.9;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
         
          vertical-align: middle;
          font-size: 25px;
          // font-weight: 100;
          white-space: pre-wrap;
          word-wrap: break-word;
          color: ${white};
          background-color: ${midThemeColor};   
          z-index: 2; 
        }
      }
    `}
    
    ${media.tablet`
      &:active {
        &:after {
          content: attr(data-content);
          cursor: pointer;
          opacity: 0.9;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
         
          vertical-align: middle;
          font-size: 25px;
          // font-weight: 100;
          white-space: pre-wrap;
          word-wrap: break-word;
          color: ${white};
          background-color: ${midThemeColor};   
          z-index: 2; 
        }
      }
    `}
  `}
   
`;