import { keyframes } from 'styled-components';

export const swing = keyframes`
  15% {
    transform: translateX(7px);
  }
  30% {
    transform: translateX(-7px);
  }
  40% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  70% {
    transform: translateX(3px);
  }
  80% {
    transform: translateX(-3px);
  }
  90% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`;
