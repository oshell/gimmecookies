import React, { Component } from 'react';
import Sign from '../Sign/Sign';
import './Roof.scss';

class Roof extends Component {
  render() {
    return(
      <div class="col-10 col-sm-6 bbox" id="roof">
        <Sign />
        <div class="roof left"></div>
        <div class="roof right"></div>
      </div>
    );
  }
}

export default Roof;
