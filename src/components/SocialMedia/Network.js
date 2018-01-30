import React, { Component } from 'react';
import { NetworkContainer } from './Network.style';
import { socialMediaItems } from './SocialMedia.data';

class Network extends Component {

  renderContactList() {
    return (socialMediaItems.map((contact) => (
        <div key={contact.key}>
          <a
            target='_blank'
            href={contact.link}>
            <i className={contact.icon}></i>
          </a>
        </div>
      ))
    )
  }

  render() {
    return (
      <NetworkContainer
        row
        justify={'center'}
        align={'center'}
      >
        {this.renderContactList()}
      </NetworkContainer>
    );
  }
}

export default Network
