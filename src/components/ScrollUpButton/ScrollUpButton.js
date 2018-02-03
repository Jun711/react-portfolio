import React, { Component } from 'react';
import { ScrollUpButtonContainer } from './ScrollUpButton.style';
import { animateScroll } from 'react-scroll';
import FontAwButton from '../FontAwButton/FontAwButton';

class ScrollUpButton extends Component {
  scrollToTop() {
    animateScroll.scrollToTop()
  }

  render() {
    return (
      <ScrollUpButtonContainer
        show={this.props.show? 1 : 0}
        translate={this.props.show? '-30%' : '30%'}
        onClick={() => this.scrollToTop()}>
        <FontAwButton class={'fa fa-angle-double-up'}/>
      </ScrollUpButtonContainer>
    );
  }
}

export default ScrollUpButton;
