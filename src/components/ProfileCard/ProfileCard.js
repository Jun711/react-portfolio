import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Title } from './ProfileCard.style';

class ProfileCard extends Component {

  render() {
    return (
      <Container>
        <Title>
          <h1>Jun Goh</h1>
          <h3>Software Developer</h3>
        </Title>
      </Container>
    )
  }
}

export default ProfileCard;