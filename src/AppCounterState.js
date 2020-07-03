import React, { Component } from 'react'
import Counter from './components/Counter'
export default class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className="container mt-5">
      <div className="row">
      
      <Counter 
      count = {this.state.count}
      increment = {this.increment}
      decrement = {this.decrement}
      />
     
        </div>
      </div>
    )
  }
}
