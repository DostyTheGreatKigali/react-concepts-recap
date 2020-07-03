import React, {
  Component
} from 'react'
import Counter from './components/Counter'

export default class App extends Component {

  render() {
    return ( 
    <div className="container mt-5">
      <h5 className="text-center">Posts</h5> 
      <div className="row">
      <Counter />
      </div> 
      </div>
    )
  }
}