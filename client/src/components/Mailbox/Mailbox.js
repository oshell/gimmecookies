import React, { Component } from 'react';
import './Mailbox.scss';

class Mailbox extends Component {
  render() {
    return(
      <div id="mailbox">
        <div class="slot"></div>
        <div class="label">Mailbox</div>
      </div>
    );
  }
}

export default Mailbox;
