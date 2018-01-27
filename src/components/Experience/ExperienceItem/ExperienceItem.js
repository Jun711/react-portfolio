import React, { Component } from 'react';
import { ComponentContainer } from './ExperienceItem.style';

class ExperienceItem extends Component {
  render() {
    return (
      <ComponentContainer>
        {this.props.children}
      </ComponentContainer>
    );
  }
}

export default ExperienceItem;