import React, { Component } from 'react';
import { AboutMeContainer, AboutWrapper, List, ListItem } from './About.style';
import { aboutMeItems } from '../../assets/data/AboutMeItems.data.js';
import Title from '../Title/Title';
import WaypointTrigger from '../WaypointTrigger/WaypointTrigger';

class About extends Component {
  renderAboutMe() {
    const aboutMe = aboutMeItems.map((desc, index) =>
      <WaypointTrigger singleUse key={index}>
        {({trigger}) =>
          <ListItem focus={index === 0 ? true : false}
                    className={trigger ? 'inViewAppear' : null}>{desc}</ListItem>
        }
      </WaypointTrigger>
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