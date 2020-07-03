import React, { useContext } from 'react';
import { CounterContext } from '../context'

const Counter = () => {
    const { count, decrementCounter, incrementCounter } = useContext(CounterContext);

    return (
        <>
    <div className="col-md-4">
          <button onClick={incrementCounter}>+</button>
      </div>
      <div className="col-md-4">
      <h1>{count}</h1>
      </div>
      <div className="col-md-4">
      <button onClick={decrementCounter}>-</button>
      </div>  
        </>
    )
}

export default Counter
