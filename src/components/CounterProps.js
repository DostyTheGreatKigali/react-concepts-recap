import React from 'react'

function Counter(counterProps) {
    return (
        <>
    <div className="col-md-4">
          <button onClick={() => counterProps.increment()}>+</button>
      </div>
      <div className="col-md-4">
      <h1>{counterProps.count}</h1>
      </div>
      <div className="col-md-4">
      <button onClick={() => counterProps.decrement()}>-</button>
      </div>  
        </>
    )
}

export default Counter
