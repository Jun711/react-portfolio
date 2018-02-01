import React, { Component } from 'react';
import {  FontAwSpan } from './FontAwButton.style'

class FontAwButton extends Component {

  decideButtonSize(size) {
    switch (size) {
      case '2x':
        return 'fa-2x'
      case '3x':
        return 'fa-3x'
      case '4x':
        return 'fa-4x'
      default:
        return 'fa-lg'
    }
  }

  render() {
    const icon = `fa ${this.props.class} fa-stack-1x fa-inverse`;
    const size = this.decideButtonSize.call(this, this.props.size);

    return (
      <FontAwSpan className={`fa-stack ${size}`}>
        <i className='fa fa-circle fa-stack-2x'/>
        <i className={icon}/>
      </FontAwSpan>
    );
  }
}

export default FontAwButton;
