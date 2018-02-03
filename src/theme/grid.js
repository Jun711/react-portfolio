import styled, { css } from 'styled-components';
import { media } from './media';

export const Div = styled.div`
  ${({marginBottom}) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
  ${({marginLeft}) => marginLeft && css`
    margin-left: ${marginLeft};
  `}
  ${({marginRight}) => marginRight && css`
    margin-right: ${marginRight};
  `}
  ${({marginTop}) => marginTop && css`
    margin-top: ${marginTop};
  `}
`;

export const Wrapper = styled(Div)`
  text-align: center;
  width: 100%;
  right: 0;
  left: 0;
  margin-top: 3.5em;
  margin-bottom: 3.5em;
`;

export const Container = styled(Div)`
  width: 100%;
  right: 0;
  left: 0;
  margin-top: 3.5em;
  ${media.tablet`
    margin-top: 3em;;  
    right: 0;
    left: 0;
  `}
  ${media.phone`  
    margin-top: 3em;;  
    right: 0;
    left: 0;
  `}   
`;

export const Relative = styled(Div)`
  position: relative;
`;

export const Flex = styled(Div)`
  display: flex;
  
  ${({row}) => row && css`
    flex-direction: row;
  `}
  ${({column}) => column && css`
    flex-direction: column;
  `}
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `}
  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `}
  ${({alignContent}) => alignContent && css`
    align-content: ${alignContent};   
  `}
`;

export const Grid = styled(Div)`
  display: grid;
 
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `}
  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `}
  ${({alignContent}) => alignContent && css`
    align-content: ${alignContent};   
  `}
`;

export const FixedWidthRelContainer = styled(Relative)`
  margin: 0 auto;
  width: 1100px;
  ${media.larger`
    width: 90vw;
  `}
`;

export const FixedWidthContainer = styled(Div)`
  margin: 0 auto;
  width: 1100px;
  ${media.larger`
    width: 90vw;
  `}
`;

export const FixedWidthFlexContainer = styled(Flex)`
  margin: 0 auto;
  width: 1100px;
  ${media.larger`
    width: 90vw;
  `}
`;