import styled from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { charcoal, white } from '../../theme/variables';

export const Line = styled(Div)`
  color: ${white};
  font-size: 1em;
  font-weight: 100;  
  margin: 0 auto;
`;

export const Container = styled(Flex)`
  right: 0;
  left: 0;
  bottom: 0;
  height: 1.5em;
  background-color: ${charcoal};
  align-content: center;
  align-items: center;
`;