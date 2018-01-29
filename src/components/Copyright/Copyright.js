import React, { Component } from 'react';
import { Container, Line } from './Copyright.style'

class Copyright extends Component {
  setCopyrightLine() {
    let present = new Date();
    let year = present.getFullYear();
    this.setState({
      copyrightLine: `Made by Jun Goh - \u{00A9} ${year}`
    })
  }

  componentWillMount() {
    this.setCopyrightLine.call(this);
  }

  render() {
    return (
      <Container
        row
        justify={'center'}
        align={'center'}
      >
        <Line>{this.state.copyrightLine}</Line>
      </Container>
    );
  }
}

export default Copyright
