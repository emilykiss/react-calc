import React, { Component } from "react";
export default class Calculator extends Component {
  state = {
    num1: "",
    num2: "",
  };

onChange = (e) => {
    e.preventDefault();
  };

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
          <h3>{this.state.sum}</h3>
        </form>
      </div>
    );
  }
}