import React, { useState, useEffect } from 'react'

function Counter(props) {
    const { name } = props;
    // const name = props.namve
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const API_URL = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await API_URL.json();
            setPosts(data);
        }
        fetchPosts();
        return () => {
            // cleanup
        }
    }, [])

    return (
        <>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.title}</p>
                        </div>
                    )
                })
            }
            <h2>{name}</h2>
        </>
    );
}

export default Counter
