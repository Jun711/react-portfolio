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
      showScrollUpButton: false
    }
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  toggleScrollUpButton(toggle) {
    this.setState(
      {
        showScrollUpButton: toggle
      }
    )
  }

  render() {
    return (
      <AppContainer>
        <WaypointTrigger
          onEnter={this.toggleScrollUpButton.bind(this, false)}
          onLeave={this.toggleScrollUpButton.bind(this, true)}
        >
          {() => <NavHeader/>}
        </WaypointTrigger>
        <ScrollUpButton show={this.state.showScrollUpButton}/>
        <Home/>
        {/*{this.props.children}*/}
        <Footer/>
        <Copyright/>
      </AppContainer>
    );
  }
}
