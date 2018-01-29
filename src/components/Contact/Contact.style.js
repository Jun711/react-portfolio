import styled from 'styled-components';
import { Div } from '../../theme/grid';
import { white, yellow, DARK_THEME_COLOR } from '../../theme/variables';

export const Line = styled(Div)`
  background-color: ${DARK_THEME_COLOR};
  font-size: 1.5em;  
 
  
  a {
    cursor: pointer;
    text-decoration: none;
    line-height: 1.3em;
    color: ${white};
  }
`;

export const ComponentContainer = styled(Div)`
  background-color: ${yellow};
  width: 100%; 
  text-align: center;
  padding-bottom: 15vh;
`;