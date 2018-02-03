import React, { Component } from 'react';
import {
  CloseButtonContainer, Content, DescContainer, DescGrid, DescItem, FixedWidthProjContainer, InfoSet,
  ProjectContainer, ProjectDetailContainer, ProjectImage, ProjectURL
} from './Project.style';
import FontAwButton from '../FontAwButton/FontAwButton';

class Project extends Component {

  renderProjectDesc(project, center) {
    let justifyContent = center ? 'center' : 'flex-start';
    const projDes = project.description || [];
    const descLines = projDes.map((line, index) =>
      <DescItem key={index}>{line}</DescItem>
    )
    return (
      <DescContainer
        column
        justify={justifyContent}
      >
        <DescGrid>
          {project.googlePlayUrl &&
          <DescItem key={-1}>
            <ProjectURL
              target='_blank'
              href={project.googlePlayUrl}>Download it on <span>Google Play<i className='fab fa-google-play' aria-hidden='true'/></span>
            </ProjectURL>
          </DescItem>}
          {descLines}
          {project.repoUrl &&
          <DescItem key={-2}>
            <ProjectURL
              target='_blank'
              href={project.repoUrl}>Check out the <span>GitHub repo<i className='fa fa-github' aria-hidden='true'/></span>
            </ProjectURL>
          </DescItem>}
        </DescGrid>
      </DescContainer>
    );
  }

  render() {
    const title = this.props.project.title || 'Project'
    const projectSwitch = this.props.projectSwitch;
    const image = this.props.project.imageUrl || 'default-proj-img.jpg';
    return (
      <ProjectContainer
        hide={!projectSwitch}
      >
        <Content>
          <CloseButtonContainer onClick={() => this.props.closeProject(false)}>
            <FontAwButton
              class={'fa fa-times'}/>
          </CloseButtonContainer>
          <FixedWidthProjContainer>
            <h2>{title}</h2>
            <ProjectDetailContainer
              row
              justify={'center'}
              alignItems={'flex-start'}
            >
              {this.props.project.imageUrl &&
              <InfoSet><ProjectImage alt={title} src={require(`../../assets/img/${image}`)}/></InfoSet>
              }
              <InfoSet>{this.renderProjectDesc(this.props.project, this.props.project.imageUrl)}</InfoSet>
            </ProjectDetailContainer>
          </FixedWidthProjContainer>
        </Content>
      </ProjectContainer>
    );
  }
}

export default Project;
