import React, { Component } from 'react';
import { FooterContainer } from './Footer.style';
import { socialMedia } from './Contacts';

class Footer extends Component {

  renderContactList() {
    return (socialMedia.map((contact) => (
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
      <FooterContainer
        row
        justify={'center'}
        align={'center'}
      >
        {this.renderContactList()}
      </FooterContainer>
    );
  }
}

export default Footer
