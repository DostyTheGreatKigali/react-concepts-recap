import React, { Component } from 'react'
// import Counter from './components/Counter'
import RenderInput from './fcc/RenderInput'
import GetInput from './fcc/GetInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */}
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput
          input={this.state.inputValue}
        />
        { /* change code above this line */}
      </div>
    );
  }
};




export default App
