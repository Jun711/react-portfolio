import styled from 'styled-components';
import { Div, FixWidthContainer } from '../../theme/grid';
import { charcoal } from '../../theme/variables';

export const Line = styled(FixWidthContainer)`
  font-size: 1.3em;  
  
  a {
    cursor: pointer;
    text-decoration: none;
    line-height: 1.3em;
    color: ${charcoal};
  }
  
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

export const ComponentContainer = styled(Div)`
  width: 100%; 
  text-align: center;
  padding-bottom: 15vh;
`;