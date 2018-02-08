import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SwissBurger from '../../components/SwissBurger/SwissBurger';
import { NavContainer } from './NavHeader.style';
import PropTypes from 'prop-types';

class NavHeader extends Component {
  render() {
    const scrollConfigBeyondTablet = {
      activeClass: 'active',
      spy: true,
      offset: this.props.shrink ? -60 : -84,
      smooth: 'easeInOutQuad',
      duration: 700
    };

    const scrollConfigTablet = {
      offset: this.props.shrink ? -304 : -320,
      smooth: 'easeInOutQuad',
      duration: 700
    };

    return (
      <NavContainer>
        <NavigationBar shrink={this.props.shrink} scrollConfig={scrollConfigBeyondTablet}/>
        <SwissBurger burgerMenuSwitch={this.props.burgerMenuSwitch} shrink={this.props.shrink}
                     scrollConfig={scrollConfigTablet}/>
      </NavContainer>
    );
  }
}

NavHeader.propTypes = {
  shrink: PropTypes.bool,
  burgerMenuSwitch: PropTypes.bool,
}

export default NavHeader;