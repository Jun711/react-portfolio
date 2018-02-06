import React, { Component } from 'react';
import { ComponentContainer, Container, List, ListItem } from './Menu.style';
import { menu } from './MenuItems'
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

class Menu extends Component {
  renderMenu() {
    const menuItems = menu.map((menuItem) =>
      <ListItem key={menuItem.key}>
        {menuItem.file && <a target='_blank' href={process.env.PUBLIC_URL + `${menuItem.file}`}>{menuItem.item}</a>}
        {menuItem.link && <a target='_blank' href={menuItem.link}>{menuItem.item}</a>}
        {!menuItem.link && !menuItem.file &&
        <Link {...this.props.scrollConfig} to={menuItem.key}>{menuItem.item}</Link>}
      </ListItem>
    )
    return (
      <List>
        {menuItems}
      </List>
    );
  }

  render() {
    const menuSwitch = this.props.menuSwitch;
    return (
      <ComponentContainer>
        <Container
          shrink={this.props.shrink}
          hide={!menuSwitch}>
          {this.renderMenu()}
        </Container>
      </ComponentContainer>
    );
  }
}

Menu.propTypes = {
  scrollConfig: PropTypes.object,
  menuSwitch: PropTypes.bool,
  shrink: PropTypes.bool,
}

export default Menu;