import React, { Component } from 'react';
import { GreetingContainer, GreetingWrapper } from './Greetings.style';
import { greetingLines } from './GreetingItems.data.js';

class Greetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pick: this.getRandomInt(3)
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  renderLineByTime(day, hour) {
    const pick = this.state.pick;
    if (hour > 7 && hour < 12) {
      return greetingLines[day].morning[pick];
    } else if (hour >= 12 && hour <= 18) {
      return greetingLines[day].afternoon[pick];
    } else if (hour > 18 && hour < 22) {
      return greetingLines[day].evening[pick];
    } else {
      return greetingLines[day].night[pick];
    }
  }

  renderText() {
    let present = new Date();
    let day = present.getDay();
    let hour = present.getHours();

    if (day >= 1 && day < 5) {
      return this.renderLineByTime('weekdays', hour);
    }

    if (day === 5) {
      return this.renderLineByTime('fridays', hour);
    }

    if (day === 6 || day === 0) {
      return this.renderLineByTime('weekends', hour);
    }
  }

  render() {
    return (
      <GreetingWrapper doSwing>
        <GreetingContainer>
          <h4>{this.renderText()}</h4>
        </GreetingContainer>
      </GreetingWrapper>
    );
  }
}

export default Greetings;