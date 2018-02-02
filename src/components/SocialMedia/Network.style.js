import styled, { css } from 'styled-components';
import { Flex } from '../../theme/grid';
import { green, themeColor, white } from '../../theme/colors';
import { bounce } from '../../theme/doBounce';
import { media, mediaBeyond } from '../../theme/media';

export const NetworkContainer = styled(Flex)`
  transition: color .3s;
  
  i {
    text-align: center
  }
  
  div {
   display: inline-block;
   padding-left: 7px;
   padding-right: 7px;
  }
  
  ${({doBounce}) => doBounce && css`
    div {
      &:nth-child(1) {
        animation: ${bounce} 1.4s ease-out 0.7s;
      }
      &:nth-child(2) {
        animation: ${bounce} 1.4s ease-out 0.8s;
      }
      &:nth-child(3) {
        animation: ${bounce} 1.4s ease-out 0.9s;
      }
      &:nth-child(4) {
        animation: ${bounce} 1.4s ease-out 1s;
      } 
    }
  `}
`;

export const SocialMediaA = styled.a`
  background-color: ${themeColor};
  display: inline-block;
  width: 55px;
  height: 55px;
  border: 1px solid #fff;
  border-radius: 100%;
  font-size: 25px;
  line-height: 55px;
  text-align: center;
  vertical-align: middle;
  color: white;
  transition: background-color .3s ease-in-out;
  ${mediaBeyond.tablet`
    &:hover {
      background-color: ${white};
      color: ${green};
    }
  `}
  ${media.tablet`
    &:active {
      background-color: ${white};
      color: ${green};
    } 
  `}
`;