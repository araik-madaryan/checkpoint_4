import React, { Component } from 'react';
import CardStrap from './CardStrap';

class FunctionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_1: false,
      modal_2: false,
      modal_3: false,
      modal_4: false,
      modal_5: false,
      modal_6: false
    };
  }

  toggle_1 = () => {
    this.setState(prevState => ({
      modal_1: !prevState.modal_1
    }));
  }

  toggle_2 = () => {
    this.setState(prevState => ({
      modal_2: !prevState.modal_2
    }));
  }

  toggle_3 = () => {
    this.setState(prevState => ({
      modal_3: !prevState.modal_3
    }));
  }

  toggle_4 = () => {
    this.setState(prevState => ({
      modal_4: !prevState.modal_4
    }));
  }

  toggle_5 = () => {
    this.setState(prevState => ({
      modal_5: !prevState.modal_5
    }));
  }

  toggle_6 = () => {
    this.setState(prevState => ({
      modal_6: !prevState.modal_6
    }));
  }
  render() {
    return (
      <div className="FunctionCard">
        <CardStrap 
          modal_1={this.state.modal_1}
          modal_2={this.state.modal_2}
          modal_3={this.state.modal_3}
          modal_4={this.state.modal_4}
          modal_5={this.state.modal_5}
          modal_6={this.state.modal_6}
          toggle_1={this.toggle_1} 
          toggle_2={this.toggle_2} 
          toggle_3={this.toggle_3} 
          toggle_4={this.toggle_4}
          toggle_5={this.toggle_5}
          toggle_6={this.toggle_6}
        />
      </div>
    );
  }
}

export default FunctionCard;