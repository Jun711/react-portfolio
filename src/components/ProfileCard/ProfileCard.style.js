import styled from 'styled-components'
import { media } from '../../theme/media'
import { green, white } from '../../theme/variables';

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.div`
  height: 13em;
  font-size: 2em;
  ${media.larger`
    height: 12em;
    font-size: 1.75em;  
  `}
  ${media.desktop`
    height: 12em;
    font-size: 1.75em;  
  `}
  ${media.tablet`
    height: 11em;
    font-size: 1.5em;  
  `}
  ${media.phone`
    height: 11em;
    font-size: 1em;  
  `}
  
  background-color: ${green};
  background-size: cover;
  background-position: center;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
  color: ${white};

  h1 {
    margin: 0;
  }
  h3 {
    margin-top: 0;
  }
`;
