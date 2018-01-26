import React, { Component } from 'react';
import { NavigationContainer, NavItem, NavItemA } from './Footer.style';

class Footer extends Component {
  render() {
    return (
      <NavigationContainer
        row
        justify={'center'}
        align={'center'}
      >
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://plus.google.com/105144552938577886739">
            <i className="fa fa-fw fa-google-plus"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/junygoh/">
            <i className="fa fa-fw fa-linkedin"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://github.com/Jun711">
            <i className="fa fa-fw fa-github"></i>
          </a>
        </div>
      </NavigationContainer>
    );
  }
}

export default Footer
