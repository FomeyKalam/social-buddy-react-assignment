import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowComment from '../ShowComment/ShowComment';

const PostDetail = () => {
    
    const{id} = useParams();
    const[comment, setComment] = useState([]) ;
    

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}` ;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))

    })
    return (
        <div>
            {
                comment.map(comment=> <ShowComment comment = {comment}></ShowComment>)
            }
          
        </div>
       
    );
};

export default PostDetail;