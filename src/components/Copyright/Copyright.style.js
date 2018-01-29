import styled from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { black, DARK_THEME_COLOR } from '../../theme/variables';

export const Line = styled(Div)`
  background-color: ${DARK_THEME_COLOR};
  font-size: 0.7em;  
  margin: 0 auto;
`;

export const Container = styled(Flex)`
  right: 0;
  left: 0;
  bottom: 0;
  height: 1em;
  background-color: ${black};
  align-content: center;
  align-items: center;
`;