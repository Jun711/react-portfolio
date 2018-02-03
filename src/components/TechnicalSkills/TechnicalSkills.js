import React, { Component } from 'react';
import { ListGrid, ListItem, SkillSet, TechnicalSkillContainer, TechnicalSkillWrapper } from './TechnicalSkills.style';
import { backendDev, mobileDev, webDev } from './Dev.data';
import { tools } from './Tools.data';
import Title from '../Title/Title';
import WaypointTrigger from '../WaypointTrigger/WaypointTrigger';

class TechnicalSkills extends Component {
  renderLanguages(devLang) {
    const languageItems = devLang.map((language) =>
      <WaypointTrigger singleUse key={language.key}>
        {({trigger}) =>
          <ListItem className={trigger ? 'inViewAppear' : null}>{language.lang} - {language.experience}</ListItem>
        }
      </WaypointTrigger>
    )
    return (
      <ListGrid>
        {languageItems}
      </ListGrid>
    );
  }

  renderTools() {
    const toolItems = tools.map((tool) =>
      <WaypointTrigger singleUse key={tool.key}>
        {({trigger}) =>
          <ListItem className={trigger ? 'inViewAppear' : null}>{tool.name}</ListItem>
        }
      </WaypointTrigger>
    )
    return (
      <ListGrid>
        {toolItems}
      </ListGrid>
    );
  }

  render() {
    const skillCategories = [
      {
        icon: 'fa-file-code-o',
        title: 'Web Dev',
        data: webDev,
      },
      {
        icon: 'fa-mobile',
        title: 'Mobile Dev',
        data: mobileDev,
      },
      {
        icon: 'fa-database',
        title: 'Backend',
        data: backendDev,
      },

    ];
    return (
      <TechnicalSkillWrapper>
        <Title
          h2
          icon='fa-code'
          title='Technical Skills'
        />
        <TechnicalSkillContainer
          row
          justify={'center'}
        >
          {skillCategories.map((skillCategory, index) =>
            <SkillSet key={index}>
              <Title
                h4
                icon={skillCategory.icon}
                title={skillCategory.title}
              />
              {this.renderLanguages(skillCategory.data)}
            </SkillSet>
          )}
          <SkillSet>
            <Title
              h4
              icon='fa-wrench'
              title='Tools'
            />
            {this.renderTools()}
          </SkillSet>
        </TechnicalSkillContainer>
      </TechnicalSkillWrapper>
    );
  }
}

export default TechnicalSkills;