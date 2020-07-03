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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ this.state.activeUsers}</h1>
      </div>
    );
  }
};



export default App
