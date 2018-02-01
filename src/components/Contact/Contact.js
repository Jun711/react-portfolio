import React, { Component } from 'react';
import { ContactWrapper, ContactURL, Line } from './Contact.style'
import Title from '../Title/Title';

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <Title
          h2
          icon='fa-phone'
          title='Contact'
        />
        <Line>
          <ContactURL href='mailto:cygoh@umich.edu'>Write me at
            <span>
              <i className='fa fa-envelope-o' aria-hidden='true'/>
              cygoh@umich.edu
            </span>
          </ContactURL>
        </Line>
        <Line>
          <ContactURL href='mailto:cygoh@umich.edu'>Visit my blog at
            <span>
              <i className='fa fa-rss' aria-hidden='true'/>
              www.language-diary.com
            </span>
          </ContactURL>
        </Line>
      </ContactWrapper>
    );
  }
}

export default Contact
