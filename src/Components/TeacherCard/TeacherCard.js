import React from 'react';
import { Card, Col } from 'react-bootstrap';

const TeacherCard = (props) => {
    const { name, email, phone, post, address, picture } = props.data;
    return (
        <Col>
            <Card className='h-100 pb-3 pt-2 shadow-sm service-card' >
                <div className='mx-auto ' style={{ width: '95%' }} >
                    <img src={picture} className='rounded w-100' height='250px' alt={name} />
                </div>
                <Card.Body >
                    <Card.Title className='text-primary fw-bold mb-0'>{name}</Card.Title>
                    <Card.Text className='ps-3'>-{post}</Card.Text>
                    <Card.Text > Email:  {email}  </Card.Text>
                    <Card.Text >  Phone: {phone}  </Card.Text>
                    <Card.Text >  Address: {address}  </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TeacherCard;