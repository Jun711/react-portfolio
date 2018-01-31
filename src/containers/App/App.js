import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Home from '../Home/Home';
import NavHeader from '../NavHeader/NavHeader';
import Copyright from '../../components/Copyright/Copyright';
import { Events, scrollSpy } from 'react-scroll';
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import { AppContainer } from './App.style'

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
      <AppContainer>
        <NavHeader/>
        <Home/>
        {/*{this.props.children}*/}
        <ScrollUpButton/>
        <Footer/>
        <Copyright/>
      </AppContainer>
    );
  }
}
