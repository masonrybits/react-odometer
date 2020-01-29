import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: 'Welcome to Odometer',
    };
  }

  render() {
    return (
      <h1>{this.state.welcome}</h1>
    )
  }
}

export default Footer