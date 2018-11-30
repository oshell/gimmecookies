import React, { Component } from 'react';
import Basement from '../Basement/Basement';
import Roof from '../Roof/Roof';
import Sky from '../Sky/Sky';
import Spacer from '../Helper/Spacer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="row" id="segment-sky">
            <Spacer />
            <Sky />
            <Spacer />
          </div>
          <div class="row" id="segment-roof">
            <Spacer />
            <Roof />
            <Spacer />
          </div>
          <div class="row" id="segment-basement">
            <Spacer />
            <Basement />
            <Spacer />
          </div>
        </div>
        <div class="container-fluid">
          <div class="row" id="segment-bottom">
            <div class="col-12" id="bottom"></div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
