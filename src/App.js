import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component {
  //Mounting function
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };

  //Mounting function
  componentDidMount() {
    console.log("component rendered");
  }

  //Updating function
  componentDidUpdate() {
    console.log("component updated");
  }

  //Unmounting function
  componentWillUnmount() {
    console.log("will unmount");
  }

  //Mounting function
  //react doesn't refresh "render" function
  render() {
    console.log("render");
    return <div>
      <h1>The number is {this.state.count}</h1>  
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
