import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SwissBurger from '../../components/SwissBurger/SwissBurger';

export default class NavHeader extends Component {
  render() {
    const scrollConfigBeyondTablet = {
      activeClass: 'active',
      spy: true,
      offset: -84,
      smooth: 'easeInOutQuad',
      duration: 700
    };

    const scrollConfigTablet = {
      activeClass: 'active',
      offset: -316,
      smooth: 'easeInOutQuad',
      duration: 700
    };

    return (
      <Container>
        <NavigationBar scrollConfig={scrollConfigBeyondTablet}/>
        <SwissBurger scrollConfig={scrollConfigTablet}/>
      </Container>
    );
  }
}