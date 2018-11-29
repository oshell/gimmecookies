import React, { Component } from 'react';
import './Roof.scss';

class Roof extends Component {
  render() {
    return(
      <div class="col-6 bbox" id="roof">
        <div class="roof left"></div>
        <div class="roof right"></div>
      </div>
    );
  }
}

export default Roof;
