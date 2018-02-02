import styled, { css } from 'styled-components';
import { Div } from '../../theme/grid';
import { green, white } from '../../theme/colors';
import { media, mediaBeyond } from '../../theme/media';

export const TitleContainer = styled(Div)`
  span {
    padding: 0 7px;
  }
  
  span {
    i:last-child {
      color: ${white};
    }
  }
  opacity: 0;   
  ${({trigger}) => trigger && css`
    span {
      i:last-child {
        
      }
    }
    opacity: 1;
    transition: opacity 0.3s;
  `}
  
  ${mediaBeyond.tablet`
    &:hover {
      span {
        i:last-child {
          color: ${green};
        }
      }
    }
  `}https://www.evernote.com/shard/s351/nl/167818999/fe170330-1be3-4979-bf52-15e608657163/
  ${media.tablet`
    &:active {
      span {
        i:last-child {
          color: ${green};
        }
      }
    }
  `}  
  
`;