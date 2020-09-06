import React, { useState } from 'react';
import fakeData from '../../fakeData';
import CommentDetails from '../CommentDetails/CommentDetails';





const ShowComment = (props) => {
    const{name,email,body} = props.comment ;
    
    const [image, setImage] = useState(fakeData) ;
    

    return (
       <div>
              {
             
                image.map(image => <CommentDetails image ={image.img} 
                                       name ={name}
                                       email ={email}
                                       body ={body}
                                       >

                </CommentDetails>)
                
              } 
              
       </div>
    );
};

export default ShowComment;