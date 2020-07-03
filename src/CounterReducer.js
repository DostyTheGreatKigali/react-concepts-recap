export default (state, action) => {
    switch(action.type) {
        case 'DECREMENT': {
            console.log("Decremented from reducer")
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'INCREMENT': {
            console.log("Incremented from reducer")
            return {
                ...state,
                count: state.count + 1
            }
        }
        default: 
           return state;
    }
}