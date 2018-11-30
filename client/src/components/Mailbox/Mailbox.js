import React, { Component } from 'react';
import './Mailbox.scss';

class Mailbox extends Component {
  render() {
    return(
      <div id="mailbox">
        <div className="slot"></div>
        <div className="label">Mailbox</div>
      </div>
    );
  }
}

export default Mailbox;
