import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  handleClick() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }
  render() { 
    return (
      <div className="container mt-5 text-center">
        <h3>Welcome to my Blog</h3>
        <button onClick={this.handleClick.bind(this)}>
          {this.state.isLoggedIn ? "Log out" : "Log in"}
        </button>
      </div>
    )
  }
}
export default App
