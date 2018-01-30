import React, { Component } from 'react';
import { ButtonDiv, ButtonFlex } from './FontAwButton.style'

class FontAwButton extends Component {
  render() {
    return (
      <ButtonFlex
        row
        justify={'center'}
        alignItems={'center'}
      >
        <ButtonDiv>
          <i className={this.props.class} aria-hidden='true'></i>
        </ButtonDiv>
      </ButtonFlex>
    );
  }
}

export default FontAwButton;
