import React, { Component } from 'react';
import { FooterContainer, SocialMediaContainer } from './Footer.style';
import Network from '../SocialMedia/Network';

class Footer extends Component {
  render() {
    return (
      <FooterContainer
        row
        justify={'center'}
        align={'center'}
      >
        <SocialMediaContainer
          column
          justify={'center'}
        >
          <h3>Connect with me:</h3>
          <Network doBounce={false}/>
        </SocialMediaContainer>
      </FooterContainer>
    );
  }
}

export default Footer
