import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';

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
      this.onEnter = () => {};
    }
  };

  onLeave = () => {
    // console.log('onLeave? ')
    const {onLeave} = this.props;
    if (onLeave) {
      onLeave();
    }
    if (this.props.onLeaveEffect) {
      this.setState({trigger: false});
    }
    if (this.props.singleUse) {
      this.onLeave = () => {};
    }
  };

  render() {
    const {children, ...etcProps} = this.props;
    return (
      <div>
        <Waypoint
          scrollableAncestor={window}
          topOffset={0}
          bottomOffset={this.props.last? 0: 135}
          {...etcProps}
          onLeave={this.onLeave}
          onEnter={this.onEnter}/>
        {children({trigger: this.state.trigger})}
      </div>
    );
  }
}

WaypointTrigger.propTypes = {
  last: PropTypes.bool,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  onLeaveEffect: PropTypes.bool,
  singleUse: PropTypes.bool,
}

