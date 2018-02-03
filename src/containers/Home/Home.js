import React, { Component } from 'react';
import { HomeContainer } from './Home.style';
import Experience from '../../components/Experience/Experience';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';
import { Element } from 'react-scroll';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

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
        <Element name='profileCard'>
          <ProfileCard/>
        </Element>
        <Element name='projects'>
          <ProjectGrid/>
        </Element>
        <TechnicalSkills/>
        <Element name='experience'>
          <Experience/>
        </Element>
        <Element name='aboutMe'>
          <About/>
        </Element>
        <Element name='contact'>
          <Contact/>
        </Element>
        {this.props.children}
      </HomeContainer>
    );
  }
}