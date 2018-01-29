import styled from 'styled-components'
import { media } from '../../theme/media'
import { blue } from '../../theme/variables';

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.div`
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
  background-size: cover;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
  color: black;
s
  h1 {
    margin: 0;
  }
  h3 {
    margin-top: 0;
  }
`;
