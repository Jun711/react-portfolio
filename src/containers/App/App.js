import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import NavHeader from '../NavHeader/NavHeader';
import Copyright from '../../components/Copyright/Copyright';
import { Events, scrollSpy } from 'react-scroll';
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import { AppContainer } from './App.style'
import WaypointTrigger from '../../components/WaypointTrigger/WaypointTrigger';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navHeaderAni: false,
      burgerMenuSwitch: false,
    }
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      // console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      // console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  toggleNavHeaderAni(toggle) {
    this.setState(
      {
        navHeaderAni: toggle
      }
    )
  }

  closeSwissBurgerMenu() {
    this.setState(
      {
        burgerMenuSwitch: false
      }
    )
  }

  render() {
    return (
      <AppContainer>
        <WaypointTrigger
          onEnter={this.toggleNavHeaderAni.bind(this, false)}
          onLeave={this.toggleNavHeaderAni.bind(this, true)}
        >
          {() => <NavHeader burgerMenuSwitch={this.state.burgerMenuSwitch} shrink={this.state.navHeaderAni}/>}
        </WaypointTrigger>
        <ScrollUpButton show={this.state.navHeaderAni}/>
        <Home closeSwissBurgerMenu={this.closeSwissBurgerMenu.bind(this)}/>
        {/*{this.props.children}*/}
        <Footer/>
        <Copyright/>
      </AppContainer>
    );
  }
}
