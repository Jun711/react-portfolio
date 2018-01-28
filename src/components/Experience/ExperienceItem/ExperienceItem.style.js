import styled, { css } from 'styled-components';
import { Flex, Div, Grid } from '../../../theme/grid';
import { media } from '../../../theme/media';
import { green, teal, yellow, THEME_COLOR, white, blue } from '../../../theme/variables';

export const ComponentContainer = styled(Div)`
  background-color: ${teal};
  width: 100%; 
  
  h3 {
    margin: 0;
  }
`;

export const ListItem = styled.li`
  font-size: 1em;
  line-height: 1em;
  background: tomato;
  text-decoration: none;  
`;

export const List = styled.ul`
  margin-top: 0;
  background: ${blue};
`;