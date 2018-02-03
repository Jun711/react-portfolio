import React, { Component } from 'react';
import { TitleContainer } from './Title.style';
import FontAwButton from '../FontAwButton/FontAwButton';
import WaypointTrigger from '../WaypointTrigger/WaypointTrigger';

class Title extends Component {
  render() {
    return (
      <WaypointTrigger singleUse>
        {({trigger}) =>
          <TitleContainer
            justify={'center'}
            alignItems={'center'}
            trigger={trigger}
          >
            {this.props.h2 &&
            <FontAwButton size='2x' class={this.props.icon}/>
            }
            {this.props.h4 &&
            <FontAwButton class={this.props.icon}/>
            }
            {this.props.h2 &&
            <h2>{this.props.title}</h2>
            }
            {this.props.h4 &&
            <h4>{this.props.title}</h4>
            }
          </TitleContainer>
        }
      </WaypointTrigger>
    )
  }
}

export default Title;