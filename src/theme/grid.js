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

export const Container = styled(Div)`
  padding-left: 60px;
  padding-right: 60px;
  ${media.phone`
    padding-left: 10px;
    padding-right: 10px;
  `},
  ${media.tablet`
    padding-left: 20px;
    padding-right: 20px;
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
  ${({ align }) => align && css`
    align-items: ${align};
  `}
`;