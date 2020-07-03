import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {incrementAction, decrementAction, fetchPosts } from '../actions/count-actions'

function Counter(counterProps) {

    useEffect(() => {
        counterProps.fetchPosts();
        return () => {
            // cleanup
        }
    }, [])

    return (
        <>
        {/* {
         counterProps.posts.map(post => {
             return(
                 <div key={post.id}>
                 <h3>{post.title}</h3>
                 <p>{post.title}</p>
                 </div>
             )
         })
        } */}
    {/* <div className="col-md-4">
          <button onClick={() => counterProps.incrementAction()}>+</button>
      </div>
      <div className="col-md-4">
      <h1>{counterProps.count}</h1>
      </div>
      <div className="col-md-4">
      <button onClick={() => counterProps.decrementAction()}>-</button>
      </div>   */}
        </>
    )
}

const mapCountStateToProps = state => {
    return {
        count: state.countInStore.count,
        posts: state.postInStore.posts,
    }
}

export default connect(mapCountStateToProps, { fetchPosts, incrementAction, decrementAction })(Counter) 
