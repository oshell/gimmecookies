import React, { Component } from 'react';
import Roof from '../Roof/Roof';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-3 bbox">
            One of three columns
          </div>
          <div class="col-6 bbox">
            One of six columns
          </div>
          <div class="col-3 bbox">
            One of three columns
          </div>
        </div>
        <div class="row">
          <div class="col-3 bbox">
            One of three columns
          </div>
          <Roof />
          <div class="col-3 bbox">
            One of three columns
          </div>
        </div>
        <div class="row">
          <div class="col-3 bbox">
            One of three columns
          </div>
          <div class="col-6 bbox">
            One of six columns
          </div>
          <div class="col-3 bbox">
            One of three columns
          </div>
        </div>
        <div class="row">
          <div class="col-3 bbox">
            One of three columns
          </div>
          <div class="col-6 bbox">
            One of six columns
          </div>
          <div class="col-3 bbox">
            One of three columns
          </div>
        </div>
      </div>
    );
  }
}

export default App;
