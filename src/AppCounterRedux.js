import React, { Component } from 'react'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import countStore from './store'

export default class App extends Component {

  render() {
    return (
      <Provider store={countStore}>
      <div className="container mt-5">
      <div className="row">
      <Counter  />
        </div>
      </div>
      </Provider>
    )
  }
}
