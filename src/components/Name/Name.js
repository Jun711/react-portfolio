import React, { Component } from 'react';
import { NameContainer } from './Name.style';

class Name extends Component {
  render() {
    return (
      <NameContainer
        row
        justify={'flex-start'}
        alignItems={'center'}
      >
        <h3>JUN GOH</h3>
      </NameContainer>
    )
  }

}

export default Name;