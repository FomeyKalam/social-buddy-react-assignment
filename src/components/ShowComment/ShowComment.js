import React, { useState } from 'react';
import fakeData from '../../fakeData';
import CommentDetails from '../CommentDetails/CommentDetails';





const ShowComment = (props) => {
    const{name,email,body} = props.comment ;
    
    const [image, setImage] = useState(fakeData) ;
    

    return (
       <div>
              {
             
                 <CommentDetails image ={image[props.i].img} 
                                       name ={name}
                                       email ={email}
                                       body ={body}
                                       >

                </CommentDetails>
                
              } 
              
       </div>
    );
};

export default ShowComment;