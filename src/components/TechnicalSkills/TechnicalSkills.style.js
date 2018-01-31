import styled from 'styled-components';
import { Div, Flex, Wrapper } from '../../theme/grid';
import { media } from "../../theme/media";

export const ListItem = styled.li`
`;

export const ListGrid = styled.ul`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: fit-content(45vw);
  ${media.tablet`
    grid-template-columns: fit-content(90vw);
  `}
  justify-content: center;
  align-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TechnicalSkillWrapper = styled(Wrapper)`
`;

export const TechnicalSkillContainer = styled(Flex)`
  padding: 0;
  margin: 0;
  flex-wrap: wrap; 
  width: 1100px;
  margin: 0 auto;   
  
  ${media.larger`
    width: 90vw;
  `}
`;

export const SkillSet = styled(Div)`
  width: 450px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  position: relative; 
  display: block;   
`;