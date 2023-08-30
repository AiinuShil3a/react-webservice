import React, { Component } from 'react';

interface StateInClassState {
  id: string;
  name: string;
  counter: number
}

export default class StateInClass extends Component<{}, StateInClassState> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: "1",
      name: "Supphalak M.",
      counter: 0
    };
  }
  clickPlus = () =>{
    this.setState({
        counter: this.state.counter + 1
    })
  }
  clickMimus = () =>{
    this.setState({
        counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <h3>StateInClass</h3>
        <h5>{this.state.name}</h5>
        <h5> counter = {this.state.counter}</h5>
        <button style={{ backgroundColor: 'green' }} onClick={this.clickPlus}>เพิ่ทขึ้น</button>
        <button style={{ backgroundColor: 'red' }} onClick={this.clickMimus}>ลดลง</button>
      </div>
    );
  }
}