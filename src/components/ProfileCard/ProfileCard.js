import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { ProfileContainer, ProfileImage, ProfileImageContainer } from './ProfileCard.style';
import Network from '../SocialMedia/Network';

class ProfileCard extends Component {

  render() {
    return (
      <Container>
        <ProfileContainer
          column
          justify={'f'}
          alignItems={'center'}
        >
          {/*<h1>Jun Goh</h1>*/}
          {/*<h3>Software Developer</h3>*/}
          <ProfileImageContainer
            row
            justify={'center'}
          >
            <ProfileImage
              alt="Jun\'s photo"
              src={require('../../assets/img/rpc-cover.jpg')}
            />
          </ProfileImageContainer>
          <Network doBounce={true}/>
        </ProfileContainer>
      </Container>
    )
  }
}

export default ProfileCard;