import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import SwissBurger from '../../components/SwissBurger/SwissBurger'
import Footer from '../../components/Footer/Footer';
import Experience from '../../components/Experience/Experience';
import TechnicalSkills from '../../components/TechnicalSkills/TechnicalSkills';
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid';
import Home from '../Home/Home';
import NavHeader from '../NavHeader/NavHeader';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Copyright from '../../components/Copyright/Copyright';
import Project from '../../components/Project/Project';
import { Element, Events, scrollSpy } from 'react-scroll';
import Contact from '../../components/Contact/Contact';

export default class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <NavHeader/>
        <Element name='profileCard'>
          <ProfileCard/>
        </Element>
        <Element name='home'>
          <Home/>
        </Element>
        <Element name='experience'>
          <Experience/>
        </Element>
        <TechnicalSkills/>
        <Element name='projects'>
          <ProjectGrid/>
        </Element>
        <Element name='contact'>
          <Contact/>
        </Element>
        {/*{this.props.children}*/}
        <Footer/>
        <Copyright/>
      </div>
    );
  }
}
