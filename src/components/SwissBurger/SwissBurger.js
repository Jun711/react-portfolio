import React, { Component } from 'react';
import { BurgerSlice, SwissBurgerBun, SwissBurgerHeader } from './SwissBurger.style';
import Menu from '../Menu/Menu';
import { Div, Flex } from '../../theme/grid';
import Name from '../Name/Name';
import PropTypes from 'prop-types';

class SwissBurger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bar1: this.props.burgerMenuSwitch || false,
      bar2: this.props.burgerMenuSwitch || false,
      bar3: this.props.burgerMenuSwitch || false,
      menuSwitch: this.props.burgerMenuSwitch || false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.menuSwitch && !nextProps.burgerMenuSwitch) {
      this.setState({
        bar1: nextProps.burgerMenuSwitch,
        bar2: nextProps.burgerMenuSwitch,
        bar3: nextProps.burgerMenuSwitch,
        menuSwitch: nextProps.burgerMenuSwitch,
      })
    }
  }

  _burgerClick(evt) {
    this.setState({
      bar1: !this.state.bar1,
      bar2: !this.state.bar2,
      bar3: !this.state.bar3,
      menuSwitch: !this.state.menuSwitch,
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

SwissBurger.propTypes = {
  shrink: PropTypes.bool,
  scrollConfig: PropTypes.object,
  burgerMenuSwitch: PropTypes.bool,
}

export default SwissBurger