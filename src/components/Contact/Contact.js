import React, { Component } from 'react';
import { ComponentContainer, Line } from './Contact.style'

class Contact extends Component {
  render() {
    return (
      <ComponentContainer>
        <h1>Contact</h1>
        <hr/>
        <Line>
          <a href='mailto:cygoh@umich.edu'>Write me at <span>cygoh@umich.edu</span></a>
        </Line>
        <Line>
          <a href='mailto:cygoh@umich.edu'>Visit my blog at <span>www.language-diary.com</span></a>
        </Line>
      </ComponentContainer>
    );
  }
}

export default Contact
