import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SwissBurger from '../../components/SwissBurger/SwissBurger';
import { media } from '../../theme/media';

export default class NavHeader extends Component {
  render() {
    const scrollConfig = {
      activeClass: 'active',
      spy: true,
      offset: -84,
      smooth: 'easeInOutQuad',
      duration: 700
    };

    return (
      <Container>
        <NavigationBar scrollConfig={scrollConfig}/>
        <SwissBurger scrollConfig={{...scrollConfig, offset: -395 }}/>
      </Container>
    );
  }
}