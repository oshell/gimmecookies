import React, { Component } from 'react';
import Orb from '../Orb/Orb';
import './Sky.scss';

class Sky extends Component {
  render() {
    let bgClass = this.props.lightsOn ? 'day' : 'night';

    return(
      <div className="col-10 col-sm-6">
        <div className={"col-4 offset-8 " + bgClass} id="orb-wrapper">
          <div id="background" className={bgClass}>
            <div className="x1"><div className="cloud"></div></div>
            <div className="x2"><div className="cloud"></div></div>
            <div className="x3"><div className="cloud"></div></div>
          </div>
          <Orb handleClick={this.props.handleClick} />
        </div>
      </div>
    );
  }
}

export default Sky;
