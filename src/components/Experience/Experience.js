import React, { Component } from 'react';
import { ComponentContainer, ExperienceContainer } from './Experience.style';
import ExperienceItem from './ExperienceItem/ExperienceItem'

class Experience extends Component {
  render() {
    return (
      <ComponentContainer>
        <h1>Experience</h1>
        <hr/>
        <ExperienceContainer>
          <ExperienceItem>123</ExperienceItem>
          <ExperienceItem>456</ExperienceItem>
          <ExperienceItem>abc</ExperienceItem>
          <ExperienceItem>def</ExperienceItem>
          <ExperienceItem>ghi</ExperienceItem>
        </ExperienceContainer>
      </ComponentContainer>
    );
  }
}

export default Experience;