import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Comments from '../components/todos/Comments';
const SinglePost = (props) => {
    const {id} = useParams();
    const [post,setPost] = useState([]);
    const [isLoading,setIsLoading] =  useState(true);
    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            return response.json()
        })
        .then((json)=>{
            setPost(json)
            setIsLoading(false)
        })
    },[id])

  return (
    <Container>
        {isLoading ? <h4 className='text-center text-danger fw-bold'>Loading...</h4>:null}
        
        <div className={isLoading?"d-none":"row"}>
            <div className='col-12 mt-2'>
                <h1 className='text-center text-success'>{post.title}</h1>
                <hr/>
                <p className='ms-3' style={{fontSize:"25px"}}>{post.body}</p>
            </div>
            <div className='col-12'>
                <Comments postId={post.id}/>
            </div>
        </div>
    </Container>
  )
}

export default SinglePost