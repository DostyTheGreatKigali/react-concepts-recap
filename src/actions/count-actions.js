import { INCREMENT, DECREMENT, FETCH_POSTS } from '../constants/count-types';

export function incrementAction() {
    // console.log("increment working");
    // Brought from componentDidMount of React but modidifed
    return function (dispatch) {

        dispatch({
            type: INCREMENT,
        })
    }  
};
export function decrementAction() {
    // console.log("increment working");
    // Brought from componentDidMount of React but modidifed
    return function (dispatch) {
        dispatch({
            type: DECREMENT,
        })
    }  
};

export const fetchPosts = () => dispatch => {
    // console.log("fetching")
    // Brought from componentDidMount of React but modidifed
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(postsData => dispatch({
                type: FETCH_POSTS,
                payload: postsData
            }
        ))
};