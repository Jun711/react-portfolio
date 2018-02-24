import React, { Component } from 'react';
import { ExperienceContainer, ExperienceWrapper } from './Experience.style';
import ExperienceItem from './ExperienceItem/ExperienceItem'
import { experienceItems } from '../../assets/data/ExperienceItemDes.data';
import Title from '../Title/Title';

class Experience extends Component {
  render() {
    return (
      <ExperienceWrapper>
        <Title
          h2
          icon='fa fa-line-chart'
          title='Experience'
        />
        <ExperienceContainer>
          {experienceItems.map((item) =>
            <ExperienceItem key={item.key} item={item}/>
          )}
        </ExperienceContainer>
      </ExperienceWrapper>
    );
  }
}

export default Experience;