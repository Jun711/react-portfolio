import styled, { css } from 'styled-components';
import { Div, Flex } from '../../theme/grid';
import { blue, green, white } from '../../theme/variables';
import { Link } from 'react-scroll';

export const Container = styled(Flex)`
  color: ${blue};
  top: 3em;
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

  transition: transform 0.7s ease-in-out, opacity 1s linear;
  
  ${({hide}) => hide && css`
    opacity: 0;
    transform: translateY(-100%);
  `}
`;

export const ComponentContainer = styled(Div)`
  width: 100%; 
`;


export const NavItem = styled(Link)`
  margin-right: 20px;
  
  font-size: 1.3em;
  cursor: pointer;
  color: ${white};  
  
  position: relative;
  line-height: 1.3em;
  text-decoration: none;
 
  &:hover {
    color: ${blue};
    &:before {
      left: 1px;
      opacity: 1;
    }
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${white};
      z-index: -1; 
      transform: scale(1.2, 1.7);
    }
  }
`;

export const ListItem = styled.li`
  font-size: 1.5em;
  background: ${green};
  text-decoration: none;  
  border-bottom: 1px solid black;
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