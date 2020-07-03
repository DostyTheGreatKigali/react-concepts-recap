import React, { Component } from 'react'
// import Counter from './components/Counter'
import RenderInput from './fcc/RenderInput'
import GetInput from './fcc/GetInput'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line
    event.preventDefault()
    this.setState({
      submit: this.state.input
    })
    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */}
          <input onChange={this.handleChange} value={this.state.input} />
          { /* change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */}
        <h1>{this.state.submit}</h1>
        { /* change code above this line */}
      </div>
    );
  }
};


export default App
