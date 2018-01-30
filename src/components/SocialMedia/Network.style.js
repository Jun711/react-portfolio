import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { blue, themeColor, white, green } from '../../theme/variables';

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
  
  a {
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
  }
  a:hover {
    background-color: ${white};
    color: ${green};
  }
`;