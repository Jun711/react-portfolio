import styled, { css } from 'styled-components'
import { media } from '../../theme/media'
import { blue, yellow, red, THEME_COLOR, LIGHT_THEME_COLOR, DARK_THEME_COLOR } from '../../theme/variables';

export const Image = styled.img`
  width: 100%;
`;

export const HeroImage = styled.div`
  height: 60vh;
  font-size: 2em;
  ${media.larger`
    height: 45vh;
    font-size: 1.75em;  
  `}
  ${media.desktop`
    height: 40vh;
    font-size: 1.75em;  
  `}
  ${media.tablet`
    font-size: 1.5em;  
    height: 35vh;
  `}
  ${media.phone`
    font-size: 1em;  
    height: 30vh;
  `}
  
  background-color: ${blue};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
  color: black;

  
  h1 {
    margin: 0;
  }
  h3 {
    margin-top: 0;
  }
`;

export const RevealP = styled.p`
  background: tomato;
  width: 1170px;
  ${media.larger`
    width: 90vw;
  `}
  margin: 0 auto;
  text-align: left;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({hide}) => hide && css`

    &:after {
      transform: rotateY(0deg);
    }
  `}
`;