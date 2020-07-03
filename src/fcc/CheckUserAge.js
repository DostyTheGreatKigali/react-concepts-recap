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
    // change code below this line
    this.state = {
      input: "",
      userAge: ""
    }
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
          /* change code here */
          this.state.userAge === "" ? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree
        }
      </div>
    );
  }
};

export default App
