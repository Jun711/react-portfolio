import React, { Component } from 'react';
import { ComponentContainer, Line } from './Contact.style'

class Contact extends Component {
  render() {
    return (
      <ComponentContainer>
        <h1>Contact</h1>
        <hr/>
        <Line>
          <a href='mailto:cygoh@umich.edu'>Email Jun at cygoh@umich.edu</a>
        </Line>
      </ComponentContainer>
    );
  }
}

export default Contact
