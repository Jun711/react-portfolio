import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../theme/media';

const TabletDiv = styled.div`
  display: none;
  ${media.tablet`
    display: block;
  `}
`;

const BeyondTabletDiv = styled.div`
  display: block;
  ${media.tablet`
    display: none;
  `}
`;

export class Tablet extends Component {
  render() {
    return (
      <TabletDiv>
        {this.props.children}
      </TabletDiv>
    );
  }
}

export class BeyondTablet extends Component {
  render() {
    return (
      <BeyondTabletDiv>
        {this.props.children}
      </BeyondTabletDiv>
    );
  }
}