import React from 'react'
import { connect } from 'react-redux'
import {incrementAction, decrementAction } from '../actions/count-actions'

function Counter(counterProps) {
    return (
        <>
    <div className="col-md-4">
          <button onClick={() => counterProps.incrementAction()}>+</button>
      </div>
      <div className="col-md-4">
      <h1>{counterProps.count}</h1>
      </div>
      <div className="col-md-4">
      <button onClick={() => counterProps.decrementAction()}>-</button>
      </div>  
        </>
    )
}

const mapCountStateToProps = state => {
    return {
        count: state.countInStore.count,
    }
}

export default connect(mapCountStateToProps, { incrementAction, decrementAction })(Counter) 
