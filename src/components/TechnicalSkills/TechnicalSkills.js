import React, { Component } from 'react';
import { ListGrid, ListItem, SkillSet, TechnicalSkillContainer, TechnicalSkillWrapper } from './TechnicalSkills.style';
import { languages } from './Languages';
import { tools } from './Tools';

class TechnicalSkills extends Component {
  renderLanguages() {
    const languageItems = languages.map((language) =>
      <ListItem key={language.key}>{language.lang}</ListItem>
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
        <h1>Technical Skills</h1>
        <hr/>
        <TechnicalSkillContainer
          row
          justify={'center'}
        >
          <SkillSet>
            <h3>Languages</h3>
            <hr/>
            {this.renderLanguages()}
          </SkillSet>
          <SkillSet>
            <h3>Tools</h3>
            <hr/>
            {this.renderTools()}
          </SkillSet>
        </TechnicalSkillContainer>
      </TechnicalSkillWrapper>
    );
  }
}

export default TechnicalSkills;