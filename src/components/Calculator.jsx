import React, { Component } from "react";
export default class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    sum: 0
  };

  setNum = e => {
      const changedInput = {
          [e.target.name]: Number(e.target.value)
      }
    this.setState(changedInput)
  }
  calculate = e => {
       e.preventDefault()
       this.setState({sum: this.state.num1 + this.state.num2 })
  }

  render() {
    return (
      <div className="caclulator">
        <h1>Add with React!</h1>

        <form onSubmit={this.calculate}>
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.setNum}
          />
          <span>+</span>
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.setNum}
          />
          <button>=</button>
          <h2>{this.state.sum}</h2>
        </form>
      </div>
    );
  }
}