import React, { Component } from 'react';
import { ComponentContainer, ExperienceContainer } from './Experience.style';
import ExperienceItem from './ExperienceItem/ExperienceItem'
import { experienceItems } from './ExperienceItem/ExperienceItemDes';

class Experience extends Component {
  render() {
    return (
      <ComponentContainer>
        <h1>Experience</h1>
        <hr/>
        <ExperienceContainer>
          {experienceItems.map((item) =>
            <ExperienceItem item={item}/>
          )}

        </ExperienceContainer>
      </ComponentContainer>
    );
  }
}

export default Experience;