import React, { Component } from 'react';
import './Sign.scss';

class Sign extends Component {
  render() {
    return(
      <div className="row">
        <div class="col-3"></div>
        <div class="col-6">
          <div id="sign">
            Cookie Bakery
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    );
  }
}

export default Sign;
