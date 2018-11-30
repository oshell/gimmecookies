import React, { Component } from 'react';
import Sign from '../Sign/Sign';
import './Roof.scss';

class Roof extends Component {
  render() {
    return(
      <div className="col-10 col-sm-6 bbox" id="roof">
        <Sign />
        <div className="roof left"></div>
        <div className="roof right"></div>
      </div>
    );
  }
}

export default Roof;
