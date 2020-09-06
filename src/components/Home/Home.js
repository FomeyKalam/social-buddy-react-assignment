import React, { useState, useEffect } from 'react';
import ShowPost from '../ShowPost/ShowPost';

const Home = () => {
    const[post, setPost] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    })
    return (
        <div>
           {
               post.map(post => <ShowPost post = {post}></ShowPost>)
           }
        </div>
    );
};

export default Home;