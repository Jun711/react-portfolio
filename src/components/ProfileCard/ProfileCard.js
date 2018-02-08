import React, { Component } from 'react';
import { ProfileContainer, ProfileImage, ProfileImageContainer } from './ProfileCard.style';
import Network from '../SocialMedia/Network';

class ProfileCard extends Component {

  render() {
    return (
      <ProfileContainer
        column
        justify={'flex-start'}
        alignItems={'center'}
      >
        <ProfileImageContainer
          row
          justify={'center'}
        >
          <ProfileImage
            alt="Jun\'s photo"
            src={require('../../assets/img/profile-pic.jpeg')}
          />
        </ProfileImageContainer>
        <Network doBounce={true}/>
      </ProfileContainer>
    )
  }
}

export default ProfileCard;