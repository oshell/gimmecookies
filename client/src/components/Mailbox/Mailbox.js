import React, { Component } from 'react';
import { NotificationManager } from 'react-notifications';
import './Mailbox.scss';

class Mailbox extends Component {
  constructor() {
    super();
    this.state = {
      dropped: false
    }
    this.drop = this.drop.bind(this);
  }

  drop() {
    if (this.state.dropped) {
      let message = 'Die Mailbox scheint kaputt zu sein.';
      NotificationManager.warning('Sorry', message);
    } else {
      this.setState({dropped: true});
    }
  }

  render() {
    let className = this.state.dropped ? 'dropped' : '';

    return(
      <div id="mailbox" onClick={this.drop} className={className}>
        <div className="slot"></div>
        <div className="label">Mailbox</div>
      </div>
    );
  }
}

export default Mailbox;
