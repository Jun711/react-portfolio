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
        <NavItem {...this.props.scrollConfig} to='profileCard'>About</NavItem>
        <NavItem {...this.props.scrollConfig} to='experience'>Experience</NavItem>
        <NavItem {...this.props.scrollConfig} to='projects'>Projects</NavItem>
        <NavItem {...this.props.scrollConfig} to='contact'>Contact</NavItem>
        <NavItemA target='_blank' href={process.env.PUBLIC_URL + '/JunResume.pdf'}>Resume</NavItemA>
        <NavItemA target='_blank' href={'http://www.language-diary.com/'}>Blog</NavItemA>
      </NavigationContainer>
    );
  }
}

export default NavigationBar
