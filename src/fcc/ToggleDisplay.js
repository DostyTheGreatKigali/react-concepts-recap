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
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // change code below this line
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
};


export default App
