import styled, { css } from 'styled-components';
import { Flex, Div, Wrapper } from '../../theme/grid';
import { media } from "../../theme/media";
import { red, yellow, THEME_COLOR, orange, pinkish, blue } from '../../theme/variables';

export const Span = styled.span`
  font-size: 1em;
  vertical-align: middle;
`;

export const ListItem = styled.li`
  font-size: 1em;
  line-height: 1em;
  height: 20px;
  background: tomato;
`;

export const ListGrid = styled.ul`
  background: ${blue};
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: fit-content(45vw);
  ${media.tablet`
    grid-template-columns: fit-content(90vw);
  `}
  justify-content: center;
  align-content: center;
  list-style: none;
  overflow: visible;
  margin: 0;
  padding: 0;
`;

export const TechnicalSkillWrapper = styled(Wrapper)`
  background-color: ${orange};;
`;

export const TechnicalSkillContainer = styled(Flex)`
  padding: 0;
  margin: 0;
  flex-wrap: wrap; 
  background-color: ${red};
  width: 1170px;
  margin: 0 auto;   
  
  h3 {
    text-align: center;
    margin: 0;
    font-size: 1em;
  }
  
  ${media.larger`
    width: 90vw;
  `}
`;

export const SkillSet = styled(Div)`
  height: 450px;
  width: 450px;
  background-color: ${pinkish};
  color: white;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  vertical-align: middle;
  
  position: relative; 
  display: block;   
`;