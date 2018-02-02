import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

export default class WaypointTrigger extends Component {
  constructor(props) {
    super(props);
    this.state = {trigger: false};
  }

  onEnter = ({ event }) => {
    const { onEnter } = this.props;
    if (onEnter) {
      onEnter();
    }
    this.setState({trigger: true});
    if (this.props.singleUse) {
      this.onEnter = null;
    }
  };

  onLeave = () => {
    const {onLeave} = this.props;
    if (onLeave) {
      onLeave();
    }
    if (this.props.onLeaveEffect) {
      this.setState({trigger: false});
    }
    if (this.props.singleUse) {
      this.onLeave = null;
    }
  };

  render() {
    const {children, ...etcProps} = this.props;
    return (
      <div>
        <Waypoint
          scrollableAncestor={window}
          topOffset={30}
          bottomOffset={this.props.last? 0: 100}
          {...etcProps}
          onLeave={this.onLeave}
          onEnter={this.onEnter}/>
        {children({trigger: this.state.trigger})}
      </div>
    );
  }
}