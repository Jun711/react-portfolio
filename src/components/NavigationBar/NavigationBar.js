import React, { Component } from 'react';
import { NavigationContainer, NavItem, NavItemA } from './NavigationBar.style';
import { Flex } from '../../theme/grid';
import Name from '../Name/Name';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer
        shrink={this.props.shrink}
        row
        justify={'space-between'}
        alignItems={'center'}
      >
        <Name scrollConfig={this.props.scrollConfig}/>
        <Flex
          row
          justify={'flex-end'}
          alignItems={'center'}
        >
          <NavItem {...this.props.scrollConfig} to='projects'>Projects</NavItem>
          <NavItem {...this.props.scrollConfig} to='experience'>Experience</NavItem>
          {/*<NavItem {...this.props.scrollConfig} to='contact'>Contact</NavItem>*/}
          <NavItemA target='_blank' href={process.env.PUBLIC_URL + '/JunResume.pdf'}>Resume</NavItemA>
          <NavItemA target='_blank' href={'http://www.language-diary.com/'}>Blog</NavItemA>
        </Flex>
      </NavigationContainer>
    );
  }
}

export default NavigationBar
