import { keyframes } from 'styled-components';

export const bounce = keyframes`
  0% {
    transform:translateY(-300%);
    opacity: 0;
  }
  5% {
    transform:translateY(-200%);
      // opacity: 0;
  }
  10% {
    transform:translateY(-100%);
      // opacity: 0;
  }
  15% {
    transform:translateY(-0%);
  }
  20% {
    transform:translateY(-50%);
  }
  25% {
    transform:translateY(25%);
    // padding-bottom: 5px;
  }
  30% {
    transform:translateY(-50%);
  }
  40% {
  	transform:translateY(20%);
    // padding-bottom: 6px;
  }
  50% {
    transform:translateY(-30%);
  }
  70% {
  	transform:translateY(15%);
    // padding-bottom: 7px;
  }
  80% {
    transform:translateY(-15%);
  }
  90% {
    transform:translateY(10%);
    // padding-bottom: 8px;
  }
  95% {
    transform:translateY(-7%);
  }
  97% {
    transform:translateY(5%);
    // padding-bottom: 9px;
  }
  99% {
    transform:translateY(-3%);
  }
  100% {
    transform:translateY(0);
    // padding-bottom: 9px;
    opacity: 1;
  }
`;
