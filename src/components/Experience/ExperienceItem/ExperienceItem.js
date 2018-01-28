import React, { Component } from 'react';
import { ComponentContainer, ListItem, List } from './ExperienceItem.style';

class ExperienceItem extends Component {
  renderDescription(description) {
    const languageItems = description.map((desc) =>
      <ListItem>{desc}</ListItem>
    )
    return (
      <List>
        {languageItems}
      </List>
    );
  }

  render() {
    return (
      <ComponentContainer>
        <h3>{this.props.item.title}</h3>
        {this.renderDescription(this.props.item.description)}
      </ComponentContainer>
    );
  }
}

export default ExperienceItem;