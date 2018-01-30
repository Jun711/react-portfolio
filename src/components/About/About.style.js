import styled from 'styled-components'
import { FixWidthContainer } from '../../theme/grid';
import { media } from '../../theme/media'

export const P = styled.p`
  background: tomato;
  width: 1100px;
  ${media.larger`
    width: 90vw;
  `}
  margin: 0 auto;
  text-align: left;
  position: relative;
`;

export const ComponentContainer = styled(FixWidthContainer)``;

export const ListItem = styled.li`
  text-decoration: none;  
  transition: font-size 0.4s linear;
  &:first-child {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const List = styled.ul`
  padding-top: 30px;
  padding-bottom: 30px;
`;