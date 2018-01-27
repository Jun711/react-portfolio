import React, { Component } from 'react';
import { ProjectContainer, ProjectItem, ProjectWrapper } from './ProjectGrid.style';

class ProjectGrid extends Component {
  render() {
    return (
      <ProjectWrapper>
        <h1>Projects</h1>
        <hr/>
        <ProjectContainer
          row
          justify={'center'}
          align={'center'}
        >
          <ProjectItem>123</ProjectItem>
          <ProjectItem>456</ProjectItem>
          <ProjectItem>abc</ProjectItem>
          <ProjectItem>def</ProjectItem>
          <ProjectItem>ghi</ProjectItem>
        </ProjectContainer>
      </ProjectWrapper>
    );
  }
}

export default ProjectGrid;