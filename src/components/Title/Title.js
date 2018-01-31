import React, { Component } from 'react';
import { Div } from '../../theme/grid';

class Title extends Component {
  render() {
    const icon = `fa ${this.props.icon} fa-stack-1x fa-inverse`
    return (
      <Div>
         <span className='fa-stack fa-lg'>
          <i className='fa fa-circle fa-stack-2x'/>
          <i className={icon}/>
        </span>
        {this.props.h2 &&
          <h2>{this.props.title}</h2>
        }
        {this.props.h4 &&
          <h4>{this.props.title}</h4>
        }
      </Div>
    )
  }

}

export default Title;