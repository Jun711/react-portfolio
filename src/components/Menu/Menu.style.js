import styled, { css } from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { blue, green } from '../../theme/variables';

export const Container = styled(Flex)`
  color: ${blue};
  top: 7vh;
  position: fixed;
  width: 100vw;
  left: 0;
  opacity: 1;
  justify-content: center;
  flex-direction: column;
  z-index: 98;
  text-align: center;
  h1 {
    margin: 0;
    margin-top: 25px;
  }

  transition: transform 0.7s ease-in-out;
  ${({hide}) => hide && css`
    transform: translateY(-100%);
  `}
`;

export const ComponentContainer = styled(Div)`
  width: 100%; 
`;

export const ListItem = styled.li`
  font-size: 2em;
  background: ${green};
  text-decoration: none;  
  border-bottom: 1px solid black;
  &:last-of-type {
    border-bottom: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;