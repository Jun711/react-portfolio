import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { Title } from './ProfileCard.style';
import Network from "../Network/Network";

class ProfileCard extends Component {

  render() {
    return (
      <Container>
        <Title>
          <h1>Jun Goh</h1>
          <h3>Software Developer</h3>
          <Network/>
        </Title>
      </Container>
    )
  }
}

export default ProfileCard;