import styled, { css } from 'styled-components'
import { FixWidthContainer, Wrapper } from '../../theme/grid';
import { media } from '../../theme/media'

export const AboutMeContainer = styled(FixWidthContainer)`
  text-align: left;
`;

export const AboutWrapper = styled(Wrapper)``;

export const ListItem = styled.li`
  opacity: 0;
  text-decoration: none;  
  transition: font-size 0.4s linear;
  ${({focus}) => focus && css`
    font-size: 25px;
    line-height: 2.2em;
    ${media.larger`
      font-size: 23px;
      line-height: 1.7em;
    `}
  `}
`;

export const List = styled.ul``;