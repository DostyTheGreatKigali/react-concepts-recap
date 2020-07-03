import React, { Component } from 'react'
// import Counter from './components/Counter'
import RenderInput from './fcc/RenderInput'
import GetInput from './fcc/GetInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
    this.handleChange = this.handleChange.bind(this);
    // change code above this line
  }
  // change code below this line
  handleChange(event) {
    // const text = event.target.value
    // console.log(text)
    this.setState({
      input: event.target.value,
    })
  }
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
        <input onChange={this.handleChange} value={this.state.input} />
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

export default App
