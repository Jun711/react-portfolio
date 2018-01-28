import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { ProfileCard } from './Home.style';
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import Experience from "../../components/Experience/Experience";
import TechnicalSkills from "../../components/TechnicalSkills/TechnicalSkills";


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
        <ProfileCard>
          <h1>Jun Goh</h1>
          <h3>Software Developer</h3>
        </ProfileCard>
        <h1>What'sup Home?</h1>
        <h2>Y What'sup Homieee? hot</h2>
        <RevealP hide={false}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </RevealP>
        <Experience/>
        <TechnicalSkills/>
        <ProjectGrid/>
      </Container>
    );
  }
}