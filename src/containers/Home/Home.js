import React, { Component } from 'react';
import { HomeContainer } from './Home.style';
import Greetings from '../../components/Greetings/Greetings';
import Experience from '../../components/Experience/Experience';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';
import { Element } from 'react-scroll';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PropTypes from 'prop-types';

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
      <HomeContainer
        onClick={this.props.closeSwissBurgerMenu}
      >
        <Element name='profileCard'>
          <ProfileCard/>
        </Element>
        <Greetings/>
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

Home.propTypes = {
  children: PropTypes.node,
  closeSwissBurgerMenu: PropTypes.func,
}