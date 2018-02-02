import React, { Component } from 'react';
import { Container, CopyrightLine } from './Copyright.style'
import WaypointTrigger from '../WaypointTrigger/WaypointTrigger';

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
        <WaypointTrigger
          singleUse
          last
        >
          {({trigger}) =>
            <CopyrightLine className={trigger ? 'inViewAppear' : null}>{this.state.copyrightLine}</CopyrightLine>
          }
        </WaypointTrigger>
      </Container>
    );
  }
}

export default Copyright
