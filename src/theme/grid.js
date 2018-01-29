import styled, { css } from 'styled-components';
import { media } from './media';

export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `}
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `}
  ${({ marginRight }) => marginRight && css`
    margin-right: ${marginRight};
  `}
  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop};
  `}
`;

export const Wrapper = styled(Div)`
  width: 100%;
  right: 0;
  left: 0;
  
  h1 {
    text-align: center;
    margin-bottom: 0px;
  }
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
  ${({ column }) => column && css`
    flex-direction: column;
  `}
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}
  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `}
  ${({ alignContent }) => alignContent && css`
    align-content: ${alignContent};   
  `}
`;

export const Grid = styled(Div)`
  display: grid;
 
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}
  ${({ alignItems }) => alignItems && css`
    align-items: ${alignItems};
  `}
  ${({ alignContent }) => alignContent && css`
    align-content: ${alignContent};   
  `}
`;