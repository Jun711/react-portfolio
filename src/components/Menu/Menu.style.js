import styled, { css } from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { blue, themeColor, white } from '../../theme/colors';

export const Container = styled(Flex)`
  color: ${blue};
  top: 3em;
  position: fixed;
  width: 100vw;
  left: 0;
  opacity: 0.9;
  justify-content: center;
  flex-direction: column;
  z-index: 98;
  text-align: center;
  h1 {
    margin: 0;
    margin-top: 25px;
  }

  transition: transform 0.7s ease-in-out, opacity 1s linear;
  
  ${({hide}) => hide && css`
    opacity: 0;
    transform: translateY(-100%);
  `}
`;

export const ComponentContainer = styled(Div)`
  width: 100%; 
`;

export const ListItem = styled.li`
  font-size: 1.5em;
  line-height: 1.5em;
  background: ${themeColor};
  text-decoration: none;  
  border-bottom: 1px solid black;
  box-sizing: border-box;
  color: ${white};
  &:last-of-type {
    border-bottom: 0;
  }
  & > a {
    color: ${white};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;