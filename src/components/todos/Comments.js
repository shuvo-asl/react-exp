import React,{ useEffect,useState} from 'react';
import Comment from './Comment';
const Comments = ({postId}) => {
    const [commentsLoading,setCommentsLoading] = useState(true);
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
            return response.json()
        })
        .then((json)=>{
            setComments(json)
            setCommentsLoading(false)
        })
    },[postId]);
    
    return(
        <>
        {commentsLoading?<p className='text-center fw-bold'>Comments Loading...</p>:<p className='text-center fw-bold'>Fetching Done</p>}
                
                <div className="row p-3">
                    <h3 className='mb-3'>All Comments</h3>
                    {comments.map((item,index)=>{
                            return <Comment key={index} data={item}/>
                    })}
                </div> 
        </>
    )
}

export default Comments