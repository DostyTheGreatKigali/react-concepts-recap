import React, { createContext, useReducer} from 'react'
import CounterReducer from './CounterReducer'

const initialState = {
    count: 0
};

// Create context
export const CounterContext = createContext(initialState);
 
// Provider Component
export const CounterProvider = ({ children }) => {
const [ state, dispatch ] = useReducer(CounterReducer, initialState);

// Actions

function decrementCounter(){
    console.log('Decremented from global state')
    dispatch({
        type: 'DECREMENT',
    })
}
function incrementCounter(){
    console.log('Incremented from global state')
    dispatch({
        type: 'INCREMENT',
        
    })
}

return (
<CounterContext.Provider value={{ 
    count: state.count,
    decrementCounter: decrementCounter,
    incrementCounter: incrementCounter,
}}
>
    { children }
</CounterContext.Provider>)
}