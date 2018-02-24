import React, { Component } from 'react';
import { ProjectContainer, ProjectCover, ProjectItem, ProjectWrapper } from './ProjectGrid.style';
import Project from '../Project/Project';
import { projects } from '../../assets/data/Projects.data'
import Title from '../Title/Title';
import WaypointTrigger from '../WaypointTrigger/WaypointTrigger';

class ProjectGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProject: false,
      selectedProject: {}
    }
  }

  toggleProject(openProject, project) {
    if (openProject) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'initial';
    }
    this.setState({
      showProject: openProject,
      selectedProject: openProject ? project : {}
    })
  }

  renderProjects() {
    const projectItems = projects.map((project) => {
      const cover = project.coverUrl || 'default-cover.jpg';
      return (
        <WaypointTrigger
          singleUse
          key={project.key}>
          {({trigger}) =>
            <ProjectItem
              hoverContent
              className={trigger ? 'inViewAppear' : null}
              data-content={project.languages}
              onClick={() => this.toggleProject.call(this, true, project)}
            >
              {project.coverUrl && <ProjectCover alt={project.title} src={require(`../../assets/img/${cover}`)}/>}
              {!project.coverUrl && <p>{project.title}</p>}
            </ProjectItem>
          }
        </WaypointTrigger>)
    })

    return projectItems
  }

  render() {
    return (
      <ProjectWrapper>
        <Title
          h2
          icon='fa fa-laptop'
          title='Projects'
        />
        <ProjectContainer
          row
          justify={'center'}
          align={'center'}
        >
          <Project
            projectSwitch={this.state.showProject}
            closeProject={this.toggleProject.bind(this)}
            project={this.state.selectedProject}
          />
          {this.renderProjects()}
        </ProjectContainer>
      </ProjectWrapper>
    );
  }
}

export default ProjectGrid;