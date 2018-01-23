import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container }from 'theme/grid';
import {
  Image,
  HeroImage,
  RevealP
} from './Home.style';

// const img = require('../assets/profile.png')
// const errorImg = require('../assets/adblocker.png');

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
        <HeroImage>
          <h1>Jun Goh</h1>
          <h2>Software Developer</h2>
        </HeroImage>
        <h1>What'sup Home?</h1>
        <h2>Y What'sup Homieee? hot</h2>
        <Image src={require('../../assets/adblocker.png')}
             // ref={img => this._img = img}
             // onError={() => this._img.src = errorImg}
             // onError={this._onError.bind(this)}
             alt='profile'/>
        <RevealP hide={false}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </RevealP>
      </Container>
    );
  }
}