import React, { Component } from 'react'
import Counter from './components/Counter'
// import InpuTextToProps from './fcc/InpuTextToProps'
// import FlipMove from 'react-flip-move';
// import { FaBeer } from 'react-icons/fa';
// import { FaAlignRight } from 'react-icons/fa';
const inputStyle = {
  width: 235,
  margin: 5
}

class OnlyEvens extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // change code below this line
    return nextProps.value % 2 !== 1;
    // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
};


export default App
