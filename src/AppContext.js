import React, { Component } from 'react'
import Counter from './components/Counter'
import { CounterProvider } from './context'

export default class App extends Component {

  render() {
    return (
      <CounterProvider>
      <div className="container mt-5">
      <div className="row">
      <Counter  />
        </div>
      </div>
      </CounterProvider>
    )
  }
}
