import React, { Component } from 'react';
import Orb from '../Orb/Orb';
import './Sky.scss';

class Sky extends Component {
  render() {
    return(
      <div class="col-10 col-sm-6">
        <div className="col-4 offset-8" id="orb-wrapper">
          <Orb />
        </div>
      </div>
    );
  }
}

export default Sky;
