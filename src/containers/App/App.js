import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import SwissBurger from '../../components/SwissBurger/SwissBurger'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <SwissBurger/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
