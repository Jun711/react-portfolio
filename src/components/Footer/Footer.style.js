import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { themeColor, white } from '../../theme/colors';

export const SocialMediaContainer = styled(Flex)`
  opacity: 0;
  h3 {
    margin-top: 0;
    color: ${white};
  }
`;

export const FooterContainer = styled(Flex)`
  flex-wrap: wrap; 
  right: 0;
  left: 0;
  bottom: 0;
  height: 13em;
  background-color: ${themeColor};
  align-content: center;
  align-items: center;
`;

