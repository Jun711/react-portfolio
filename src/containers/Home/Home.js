import React, { Component } from 'react';
import { HomeContainer } from './Home.style';

export default class Home extends Component {
  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '../assets/adblocker.png'
    }
  }

  _onError() {
    this.setState({
      imageUrl: '../assets/1.jpeg'
    })
  }

  render() {
    return (
      <HomeContainer>
        {this.props.children}
      </HomeContainer>
    );
  }
}