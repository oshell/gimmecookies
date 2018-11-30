import React, { Component } from 'react';
import './Door.scss';

class Door extends Component {
  render() {
    return(
      <div id="door" onClick={this.props.orderCookie} >
        <div id="handle"></div>
      </div>
    );
  }
}

export default Door;
