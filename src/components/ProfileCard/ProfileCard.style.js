import styled from 'styled-components';
import { FixWidthFlexContainer, Flex } from '../../theme/grid';
import { green } from '../../theme/colors';
import { bounce } from '../../theme/doBounce';

export const Image = styled.img`
  width: 100%;
`;

export const ProfileContainer = styled(Flex)`
  height: 8em;
  font-size: 1.8em;
  background-color: ${green};
  background-size: cover;
  background-position: center;
`;

export const ProfileImageContainer = styled(FixWidthFlexContainer)`
    animation: ${bounce} 1.3s ease-out 1.2s;  
`;

export const ProfileImage = styled.img`
  display: block;
  border-radius: 100%;
  height: 170px;
  width: 170px;
  margin: 0.7em;
`;
