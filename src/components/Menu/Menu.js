import React, { Component } from 'react';
import { Container, List, ListItem, ComponentContainer, Background } from './Menu.style';
import { menu } from './MenuItems'

class Menu extends Component {
  renderMenu() {
    const menuItems = menu.map((menuItem) =>
      <ListItem>
        {menuItem.link && <a target='_blank' href={menuItem.link}>{menuItem.item}</a>}
        {!menuItem.link && menuItem.item}
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
        <Container hide={!menuSwitch}>
          {this.renderMenu()}
        </Container>
      </ComponentContainer>
    );
  }
}

export default Menu;