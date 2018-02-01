import React, { Component } from 'react';
import { NameContainer, NameLink } from './Name.style';

class Name extends Component {
  render() {
    return (
      <NameContainer
        row
        justify={'flex-start'}
        alignItems={'center'}
      >
        <NameLink {...this.props.scrollConfig} itemProp='name' to='aboutMe'>
          JUN GOH
        </NameLink>
      </NameContainer>
    )
  }

}

export default Name;