import React, { Component } from 'react';
import { ProjectContainer, ProjectItem, ProjectWrapper } from './Projects.style';

class Projects extends Component {
  render() {
    return (
        <ProjectContainer
          row
          justify={'center'}
        >
          <ProjectItem>123</ProjectItem>
          <ProjectItem>456</ProjectItem>
          <ProjectItem>abc</ProjectItem>
          <ProjectItem>def</ProjectItem>
          <ProjectItem>ghi</ProjectItem>
        </ProjectContainer>
    );
  }
}

export default Projects;