import React, { Component } from 'react';
import './Window.scss';

class Window extends Component {
  constructor(){
    super();
    this.state = {
      flipped: false
    }
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(){
    this.setState({
      flipped: !this.state.flipped
    });
  }

  render() {
    let cardClass = this.state.flipped ? 'card is-flipped' : 'card';

    return(
      <div className="card-wrapper">
        <div className={cardClass}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}>
          <div className="card-face window">
          </div>
          <div className="card-face cookie">
          </div>
        </div>
      </div>
    );
  }
}

export default Window;
