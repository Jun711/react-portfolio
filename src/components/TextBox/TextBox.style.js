import styled from 'styled-components'
import { media } from '../../theme/media'

export const P = styled.p`
  background: tomato;
  width: 1170px;
  ${media.larger`
    width: 90vw;
  `}
  margin: 0 auto;
  text-align: left;
  position: relative;
`;