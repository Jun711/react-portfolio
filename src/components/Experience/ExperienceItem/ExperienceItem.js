import React, { Component } from 'react';
import { ComponentContainer, H3, List, ListItem } from './ExperienceItem.style';
import WaypointTrigger from '../../WaypointTrigger/WaypointTrigger';
import PropTypes from 'prop-types';

class ExperienceItem extends Component {
  renderDescription(description) {
    const languageItems = description.map((desc, index) =>
      <WaypointTrigger singleUse key={index}>
        {({trigger}) =>
          <ListItem className={trigger ? 'inViewAppear' : null}>{desc}</ListItem>
        }
      </WaypointTrigger>
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
        <WaypointTrigger singleUse>
          {({trigger}) =>
            <H3 className={trigger ? 'inViewAppear' : null}>{this.props.item.title}</H3>
          }
        </WaypointTrigger>
        {this.renderDescription(this.props.item.description)}
      </ComponentContainer>
    );
  }
}

ExperienceItem.propTypes = {
  item: PropTypes.object,
}

export default ExperienceItem;