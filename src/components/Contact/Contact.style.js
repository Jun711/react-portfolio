import styled from 'styled-components';
import { Wrapper, FixWidthContainer } from '../../theme/grid';
import { media, mediaBeyond } from '../../theme/media';
import { UnderlineA } from '../../theme/animatedTags';

export const Line = styled(FixWidthContainer)`
  opacity: 0;
  font-size: 1.3em;  
  ${mediaBeyond.desktop`
    padding: 15px;
  `}
  padding: 0;
  opacity: 0;
`;

export const ContactWrapper = styled(Wrapper)`
  margin-bottom: 0;
  padding-bottom: 15vh;
`;

export const ContactURL = styled(UnderlineA)`
  font-size: 1.3em; 
  ${media.desktop`
    font-size: 17px;
  `}
`;