import { keyframes } from 'styled-components';

export const bounce = keyframes`
  0% {
    transform:translateY(-300%);
    opacity: 0;
  }
  5% {
    transform:translateY(-200%);
  }
  10% {
    transform:translateY(-100%);
  }
  15% {
    transform:translateY(-0%);
  }
  20% {
    transform:translateY(-50%);
  }
  25% {
    transform:translateY(25%);
  }
  30% {
    transform:translateY(-50%);
  }
  40% {
  	transform:translateY(20%);
  }
  50% {
    transform:translateY(-30%);
  }
  70% {
  	transform:translateY(15%);
  }
  80% {
    transform:translateY(-15%);
  }
  90% {
    transform:translateY(10%);
  }
  95% {
    transform:translateY(-7%);
  }
  97% {
    transform:translateY(5%);
  }
  99% {
    transform:translateY(-3%);
  }
  100% {
    transform:translateY(0);
    opacity: 1;
  }
`;
