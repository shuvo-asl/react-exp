import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
export const Todo = (props) => {
    const post = props.post;
    const navigate = useNavigate();
    // const toPage = navigate(`/posts`,{id:post.id});
    return (
        <div className='col-3'>
            <Card>
                <Card.Body>
                    <Card.Title>{(post.title).length > 20 ? (post.title).substring(0,20)+"...":post.title}</Card.Title>
                    <Card.Text>
                    {(post.body).length > 100 ? (post.body).substring(0,99)+"...":post.body}
                    </Card.Text>
                    {/* <Card.Link href="">Details</Card.Link> */}
                    <button className='btn btn-sm btn-primary' onClick={()=>{
                        navigate(`/posts/${post.id}`)
                    }}>Details</button>
                </Card.Body>
            </Card>
        </div>
    )
}
