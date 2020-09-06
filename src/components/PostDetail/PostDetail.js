import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowComment from '../ShowComment/ShowComment';

const PostDetail = () => {
    
    const{id} = useParams();
    const[comments, setComments] = useState([]) ;
    

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}` ;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))

    })
    return (
        <div>
            {
                comments.map((comment,i)=> <ShowComment comment = {comment} i = {i}>

                </ShowComment>)
            }
          
        </div>
       
    );
};

export default PostDetail;