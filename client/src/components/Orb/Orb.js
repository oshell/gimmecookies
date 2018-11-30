import React, { Component } from 'react';
import './Orb.scss';

class Orb extends Component {
  render() {
    return(
      <div id="orb" onClick={this.props.handleClick}>
        <div className="craters-top"></div>
        <div className="craters-bottom"></div>
      </div>
    );
  }
}

export default Orb;
