import styled, { css } from 'styled-components';
import { Flex, Div, Grid } from '../../../theme/grid';
import { media } from '../../../theme/media';
import { green, teal, yellow, THEME_COLOR, white, blue } from '../../../theme/variables';

export const ComponentContainer = styled(Div)`
  background-color: ${teal};
  width: 100%; 
  text-align: center;
`;