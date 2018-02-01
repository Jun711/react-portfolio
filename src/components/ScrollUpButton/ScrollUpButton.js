import React, { Component } from 'react';
import { ScrollUpButtonContainer } from './ScrollUpButton.style';
import { animateScroll } from 'react-scroll';
import FontAwButton from '../FontAwButton/FontAwButton';

class ScrollUpButton extends Component {
  scrollToTop() {
    console.log('animateScroll: ', animateScroll)
    animateScroll.scrollToTop()
  }

  render() {
    return (
      <ScrollUpButtonContainer onClick={() => this.scrollToTop()}>
        <FontAwButton class={'fa fa-angle-double-up'}/>
      </ScrollUpButtonContainer>
    );
  }
}

export default ScrollUpButton;
