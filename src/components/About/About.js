import React, { Component } from 'react';
import { ComponentContainer, List, ListItem } from './About.style';
import { aboutMeItems } from './AboutMeItems.data.js';

class About extends Component {
  renderAboutMe() {
    const aboutMe = aboutMeItems.map((desc, index) =>
      <ListItem key={index}>{desc}</ListItem>
    )
    return (
      <ComponentContainer>
        <List>
          {aboutMe}
        </List>
      </ComponentContainer>
    );
  }

  render() {
    return (
      <ComponentContainer>
        <h1>About Jun</h1>
        <hr/>
        {this.renderAboutMe()}
      </ComponentContainer>
    );
  }
}

export default About;