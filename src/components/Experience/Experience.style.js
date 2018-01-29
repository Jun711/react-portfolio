import styled, { css } from 'styled-components';
import { Flex, Div } from '../../theme/grid';
import { media } from '../../theme/media';
import { green, pink, yellow, THEME_COLOR, white, blue } from '../../theme/variables';

export const ComponentContainer = styled(Div)`
  background-color: ${green};
  width: 100%; 
  
  h1 {
    margin-bottom: 0px;
  }
`;

export const ExperienceContainer = styled(Div)`
 background-color: ${pink};
  margin: 0 auto;   
  width: 1170px;
  ${media.larger`
    width: 90vw;
  `}
  
  h3 {
    text-align: left;
  }
`;
