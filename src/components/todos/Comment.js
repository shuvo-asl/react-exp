import React from 'react'
import Card from 'react-bootstrap/Card';
const Comment = ({data}) => {
  return (
    <div className='col-12'>
        <Card className='mb-3 '>
            <Card.Body>
                <Card.Title className='text-success'>
                    {data.name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.email}</Card.Subtitle>
                <Card.Text>
                    {data.body}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Comment