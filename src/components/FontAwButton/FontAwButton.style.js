import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { blue, orange, red, teal, yellow, charcoal, THEME_COLOR, DARK_THEME_COLOR, LIGHT_THEME_COLOR } from '../../theme/variables';
import { media } from "../../theme/media";

export const ButtonFlex = styled(Flex)`
  height: 4em;
  width: 4em;
  background-color: ${DARK_THEME_COLOR};
  color: ${blue};
  border-radius: 50%;
  transition: background-color .3s ease-in-out;
  &:hover {
    background-color: ${charcoal};
    color: ${blue};
  }
`;

export const ButtonDiv = styled.div`
   display: inline-block;
   height: 3em;
   width: 3em;
   line-height: 3em;
   // color: ${orange};
   // background-color: ${red};
   border-radius: 50%;
   // margin: 0 auto;
   // text-align: center;
   
  // height: 300px;
  // width: 300px;
  // ${media.larger`
  //   height: 250px;
  //   width: 250px;
  // `}
  // ${media.desktop`
  //   height: 220px;
  //   width: 220px;
  // `}
  // ${media.tablet`
  //   height: 170px;
  //   width: 170px;
  // `}
  // ${media.phone`
  //   height: 300px;
  //   width: 300px;
  // `}
   
   i {
    font-size: 3em;
    font-weight: 100;
    // background-color: ${yellow};
    transition: transform 0.7s ease-in-out, opacity 1s linear;
    
    &:hover {
      // font-size: 3.5em;
       transform: translateY(-10%);
    }
   }
`;