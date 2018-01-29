import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import TextBox from '../../components/TextBox/TextBox';

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
      <Container>
        <TextBox/>
        {this.props.children}
      </Container>
    );
  }
}