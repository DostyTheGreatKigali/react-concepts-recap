import { INCREMENT, DECREMENT, FETCH_POSTS } from '../constants/count-types';

const initialState = {
    count: 0,
    posts: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case INCREMENT: 
        // console.log("increment reducer")
        // console.log(action.message)
        return {
            ...state,
            count: state.count + 1,
            // items: action.payload
        }
        case DECREMENT: 
        // console.log("decrement reducer")
        return {
            ...state,
            count: state.count - 1,
        }
        case FETCH_POSTS: 
        // console.log("decrement reducer")
        return {
            ...state,
            posts: action.payload,
        }
        default: 
        return state;
    }

}