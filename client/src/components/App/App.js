import React, { Component } from 'react';
import Basement from '../Basement/Basement';
import Roof from '../Roof/Roof';
import Sky from '../Sky/Sky';
import Spacer from '../Helper/Spacer';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';
import './App.scss';
import 'react-notifications/lib/notifications.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lightsOn: true
    }
    this.lightsOnOff = this.lightsOnOff.bind(this);
    this.orderCookie = this.orderCookie.bind(this);
  }

  lightsOnOff() {
    this.setState({
      lightsOn: !this.state.lightsOn
    });
  }

  orderCookie() {
    let base = 'http://oshell.local.cookies/api';
    let link = base + '/order';

    if (!this.state.lightsOn) {
      let message = 'Bestellung können nur Tags abgegeben werdem';
      NotificationManager.warning('Sorry', message);
      return;
    }

    axios({
      method: 'POST',
      url: link
    }).then(function (response) {
      let order = response.data.data;
      let message = 'Bestellung eingegangen (' + order.id + ')';
      NotificationManager.success('Prima!', message);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row" id="segment-sky">
            <Spacer />
            <Sky handleClick={this.lightsOnOff} lightsOn={this.state.lightsOn} />
            <Spacer />
          </div>
          <div className="row" id="segment-roof">
            <Spacer />
            <Roof />
            <Spacer />
          </div>
          <div className="row" id="segment-basement">
            <Spacer />
            <Basement
              lightsOn={this.state.lightsOn}
              orderCookie={this.orderCookie} />
            <Spacer />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row" id="segment-bottom">
            <div className="col-12" id="bottom"></div>
          </div>
        </div>
        <NotificationContainer/>
      </>
    );
  }
}

export default App;
