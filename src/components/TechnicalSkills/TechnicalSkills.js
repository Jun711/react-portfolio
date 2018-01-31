import React, { Component } from 'react';
import { ListGrid, ListItem, SkillSet, TechnicalSkillContainer, TechnicalSkillWrapper } from './TechnicalSkills.style';
import { backendDev, mobileDev, webDev } from './Dev.data';
import { tools } from './Tools';
import Title from '../Title/Title';

class TechnicalSkills extends Component {
  renderLanguages(devLang) {
    const languageItems = devLang.map((language) =>
      <ListItem key={language.key}>{language.lang} - {language.experience}</ListItem>
    )
    return (
      <ListGrid>
        {languageItems}
      </ListGrid>
    );
  }

  renderTools() {
    const toolItems = tools.map((tool) =>
      <ListItem key={tool.key}>{tool.name}</ListItem>
    )
    return (
      <ListGrid>
        {toolItems}
      </ListGrid>
    );
  }

  render() {
    return (
      <TechnicalSkillWrapper>
        <Title
          h2
          icon='fa-laptop'
          title='Technical Skills'
        />
        <TechnicalSkillContainer
          row
          justify={'center'}
        >
          <SkillSet>
            <Title
              h4
              icon='fa-file-code-o'
              title='Web Dev'
            />
            {this.renderLanguages(webDev)}
          </SkillSet>
          <SkillSet>
            <Title
              h4
              icon='fa-mobile'
              title='Mobile Dev'
            />
            {this.renderLanguages(mobileDev)}
          </SkillSet>
          <SkillSet>
            <Title
              h4
              icon='fa-database'
              title='Backend'
            />
            {this.renderLanguages(backendDev)}
          </SkillSet>
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