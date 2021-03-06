import React, { Component } from 'react';
import './Basement.scss';
import Window from '../Window/Window';
import Door from '../Door/Door';
import Mailbox from '../Mailbox/Mailbox';

class Basement extends Component {
  render() {
    return(
      <div className="col-10 col-sm-6" id='basement'>
        <div className="row">
          <div className="col-4">
            <Window lightsOn={this.props.lightsOn} />
          </div>
          <div className="col-4" id="door-wrapper">
            <Door orderCookie={this.props.orderCookie} />
          </div>
          <div className="col-4">
            <Window lightsOn={this.props.lightsOn} />
            <Mailbox />
          </div>
        </div>
      </div>
    );
  }
}

export default Basement;
