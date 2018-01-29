import styled, { css } from 'styled-components';
import { Div, Flex, Relative } from '../../theme/grid';
import { blue, white, teal, green, purple } from '../../theme/variables';
import { Link } from 'react-scroll';
import { media } from '../../theme/media';

// const Container = styled(Flex)`
//   color: ${menuTextColor};
//
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   left: 0;
//   font-size: 16px;
//
//   justify-content: center;
//   flex-direction: column;
//
//   background-color: ${menuBackground};
//   z-index: 98;
//
//   text-align: center;
//
//   // p {
//   //   color: white;
//   // }
//
//   h1 {
//     margin: 0;
//     margin-top: 25px;
//   }
//
//   ${media.tablet`
//     h1 {
//       font-size: 1.5em;
//     }
//   `}
//   transition: transform 0.6s ${easeInOutQuart};
//   ${({ hide }) => hide && css`
//     transform: translateY(-100%);
//   `}
// `;

export const Content = styled(Relative)`
  background-color: ${green};
  padding-top: 20px;
  padding-left: 100px;
  padding-right: 100px;
  ${media.tablet`
    padding-top: 0;
    padding-left: 40px;
    padding-right: 40px;
  `}
`;

// const Background = styled.div`
//   position: fixed;
//   background-image: url(${require("assets/body-background.png")});
//   background-size: 100%;
//   background-position: center center;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: 100;
//   opacity: 0.1;
//   pointer-events: none;
//   transition: opacity .4s;
// `;
//
// const revealUpKeyframes = keyframes`
//   from { transform: translateY(105%); }
//   to { transform: translateY(0); }
// `;
//
// const RevealUp = styled(Div)`
//   overflow: hidden;
//   & > * {
//     ${({ show }) => show && css`
//       transform: translateY(105%);
//       animation: ${revealUpKeyframes} .6s ${easeOutQuart};
//       animation-delay: 0.6s;
//       animation-fill-mode: forwards;
//     `}
//   }
// `;
export const Container = styled(Flex)`
  color: ${blue};
  top: 7vh;
  background-color: ${teal};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 1;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
  text-align: center;
  h1 {
    margin: 0;
    margin-top: 25px;
  }

  transition: transform 0.7s ease-in-out, opacity 1s linear;
  
  ${({hide}) => hide && css`
    opacity: 0;
    transform: translateY(-100%);
  `}
`;

export const ComponentContainer = styled(Div)`
  background-color: ${teal};
  width: 100%; 
`;


export const NavItem = styled(Link)`
  margin-right: 20px;
  
  font-size: 1.3em;
  cursor: pointer;
  color: ${white};  
  
  position: relative;
  line-height: 1.3em;
  text-decoration: none;
 
  &:hover {
    color: ${blue};
    &:before {
      left: 1px;
      opacity: 1;
    }
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${white};
      z-index: -1; 
      transform: scale(1.2, 1.7);
    }
  }
`;