import React, { Component } from 'react';
import { backgroundColor, menuBackground } from '../../theme/variables';
import { BurgerSlice, SwissBurgerBun, SwissBurgerHeader } from './SwissBurger.style';
import Menu from '../Menu/Menu';
import { Div } from '../../theme/grid';

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
    console.log('burgerClick evt:', evt)
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
          justify={'flex-end'}
          alignItems={'center'}
          onClick={this._burgerClick.bind(this)}
        >
          <SwissBurgerBun>
            <BurgerSlice bar1={this.state.bar1}></BurgerSlice>
            <BurgerSlice bar2={this.state.bar2}></BurgerSlice>
            <BurgerSlice bar3={this.state.bar3}></BurgerSlice>
          </SwissBurgerBun>
        </SwissBurgerHeader>
        <Menu
          scrollConfig={this.props.scrollConfig}
          menuSwitch={this.state.menuSwitch}
        />
      </Div>
    );
  }
}

export default SwissBurger