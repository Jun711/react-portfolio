import React, { Component } from 'react';
import { FooterContainer, SocialMediaContainer } from './Footer.style';
import Network from '../SocialMedia/Network';
import WaypointTrigger from '../WaypointTrigger/WaypointTrigger';

class Footer extends Component {
  render() {
    return (
      <FooterContainer
        row
        justify={'center'}
        align={'center'}
      >
        <WaypointTrigger singleUse>
          {({trigger}) =>
            <SocialMediaContainer
              column
              justify={'center'}
              className={trigger ? 'inViewAppear' : null}
            >
              <h3>Connect with me:</h3>
              <Network doBounce={false}/>
            </SocialMediaContainer>
          }
        </WaypointTrigger>
      </FooterContainer>
    );
  }
}

export default Footer
