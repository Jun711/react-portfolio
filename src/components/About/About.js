import React, { Component } from 'react';
import { AboutWrapper, AboutMeContainer, List, ListItem } from './About.style';
import { aboutMeItems } from './AboutMeItems.data.js';
import Title from '../Title/Title';

class About extends Component {
  renderAboutMe() {
    const aboutMe = aboutMeItems.map((desc, index) =>
      <ListItem key={index}>{desc}</ListItem>
    )
    return (
      <AboutMeContainer>
        <List>
          {aboutMe}
        </List>
      </AboutMeContainer>
    );
  }

  render() {
    return (
      <AboutWrapper>
        <Title
          h2
          icon='fa-address-card-o'
          title='About Jun'
        />
        {this.renderAboutMe()}
      </AboutWrapper>
    );
  }
}

export default About;