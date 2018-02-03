import React, { Component } from 'react';
import { BurgerSlice, SwissBurgerBun, SwissBurgerHeader } from './SwissBurger.style';
import Menu from '../Menu/Menu';
import { Div, Flex } from '../../theme/grid';
import Name from '../Name/Name';

class SwissBurger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bar1: false,
      bar2: false,
      bar3: false,
      menuSwitch: false,
    }
  }

  _burgerClick(evt) {
    this.setState({
      bar1: !this.state.bar1,
      bar2: !this.state.bar2,
      bar3: !this.state.bar3,
      menuSwitch: !this.state.menuSwitch
    })
  }

  render() {
    return (
      <Div>
        <SwissBurgerHeader
          shrink={this.props.shrink}
          row
          justify={'space-between'}
          alignItems={'center'}
        >
          <Name
            scrollConfig={{...this.props.scrollConfig, offset: -84}}
          />
          <Flex
            row
            justify={'flex-end'}
            alignItems={'center'}
            onClick={this._burgerClick.bind(this)}
          >
            <SwissBurgerBun bun={this.state.bar1}>
              <BurgerSlice bar1={this.state.bar1}></BurgerSlice>
              <BurgerSlice bar2={this.state.bar2}></BurgerSlice>
              <BurgerSlice bar3={this.state.bar3}></BurgerSlice>
            </SwissBurgerBun>
          </Flex>

        </SwissBurgerHeader>
        <Menu
          shrink={this.props.shrink}
          scrollConfig={this.props.scrollConfig}
          menuSwitch={this.state.menuSwitch}
        />
      </Div>
    );
  }
}

export default SwissBurger