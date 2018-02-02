import React, { Component } from 'react';
import { ContactURL, ContactWrapper, Line } from './Contact.style'
import Title from '../Title/Title';
import WaypointTrigger from '../WaypointTrigger/WaypointTrigger';
import { contactData } from './Contact.data';

class Contact extends Component {
  renderContact() {
    return contactData.map((contact, index) =>
      <WaypointTrigger singleUse key={index}>
        {({trigger}) =>
          <Line className={trigger ? 'inViewAppear' : null}>
            <ContactURL href={contact.link}>{contact.actionText}
              <span>
                <i className={contact.icon} aria-hidden='true'/>
                {contact.linkText}
              </span>
            </ContactURL>
          </Line>
        }
      </WaypointTrigger>
    )
  }

  render() {
    return (
      <ContactWrapper>
        <Title
          h2
          icon='fa-phone'
          title='Contact'
        />
        {this.renderContact()}
      </ContactWrapper>
    );
  }
}

export default Contact
