import React, { Component } from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { menuBackground, backgroundColor } from '../../theme/variables';
// import { Motion, spring } from 'react-motion';
// import { open as openMenu, close as closeMenu } from '../../redux/modules/menu';
// import SimpleStaggeredMotion from 'components/SimpleStaggeredMotion/SimpleStaggeredMotion';
import { SwissBurgerHeader, SwissBurgerBun, BurgerSlice } from './SwissBurger.style'


// const Line = styled.span`
//   display: block;
//   width: 30px;
//   height: 2px;
//   background-color: ${menuBackground};
//   margin-bottom: 5px;
// `;
//
// const Relative = styled.div`
//   position: relative;
// `;
//
// const AbsoluteLine = styled(Line)`
//   position: absolute;
//   right: 0;
//   top: 0;
//   background-color: ${backgroundColor};
// `;
//
// const Container = styled.div`
//   position: fixed;
//   top: 20px;
//   right: 40px;
//   cursor: pointer;
//   z-index: 99;
// `;



class SwissBurger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bar1: false,
      bar2: false,
      bar3: false
    }
  }
  _burgerClick(evt) {
    console.log('burgerClick evt:', evt)
    this.setState({
      bar1: !this.state.bar1,
      bar2: !this.state.bar2,
      bar3: !this.state.bar3
    })
  }
  render() {
    return (
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
    );
  }
}

export default SwissBurger