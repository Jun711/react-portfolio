import styled from 'styled-components';
import { media } from './media';

export const Container = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 20px;
  ${media.tablet`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  `},
  ${media.tablet`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
  `}
`;
