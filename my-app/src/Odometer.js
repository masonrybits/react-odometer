import React from 'react';

class Odometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  clickHandler(change) {
    let changed_num = this.state.number + change;
    if (changed_num < 0) {
      changed_num = 0
    } else if (changed_num > 9999) {
      changed_num = changed_num - 9999;
    }
    this.setState({
      number: changed_num
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.number}</h1>
        <div>
        <button onClick={this.clickHandler.bind(this, 1)}>Add 1</button>
        <button onClick={this.clickHandler.bind(this, 10)}>Add 10</button>
        <button onClick={this.clickHandler.bind(this, 100)}>Add 100</button>
        <button onClick={this.clickHandler.bind(this, 1000)}>Add 1000</button>
        </div>
        <div>
        <button onClick={this.clickHandler.bind(this, -1)}>Subtract 1</button>
        <button onClick={this.clickHandler.bind(this, -10)}>Subtract 10</button>
        <button onClick={this.clickHandler.bind(this, -100)}>Subtract 100</button>
        <button onClick={this.clickHandler.bind(this, -1000)}>Subtract 1000</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Odometer