import React, { Component } from 'react';
import { NetworkContainer, SocialMediaA } from './Network.style';
import { socialMediaItems } from '../../assets/data/SocialMedia.data';
import PropTypes from 'prop-types';

class Network extends Component {

  renderContactList() {
    return (socialMediaItems.map((contact) => (
        <div key={contact.key}>
          <SocialMediaA
            target='_blank'
            href={contact.link}>
            <i className={contact.icon}></i>
          </SocialMediaA>
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
        doBounce={this.props.doBounce}
      >
        {this.renderContactList()}
      </NetworkContainer>
    );
  }
}

Network.propTypes = {
  doBounce: PropTypes.bool,
}

export default Network
