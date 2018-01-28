import React, { Component } from 'react';
import { NavigationContainer, NavItem, NavItemA } from './NavigationBar.style';


class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer
        row
        justify={'flex-end'}
        alignItems={'center'}
      >
        <NavItem to='/'>About</NavItem>
        <NavItem to='projects'>Projects</NavItem>
        <NavItem>Experience</NavItem>
        <NavItemA target='_blank' href={'../../assets/doc/JunResume.pdf'}>Resume</NavItemA>
        <NavItemA target='_blank' href={'http://www.language-diary.com/'}>Blog</NavItemA>
      </NavigationContainer>
    );
  }
}

export default NavigationBar
