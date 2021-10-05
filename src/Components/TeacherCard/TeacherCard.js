import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './TeacherCard.css';

const TeacherCard = (props) => {
    const { name, email, phone, post, address, picture } = props.data;
    return (
        <Col>
            <Card className='h-100 pb-3 pt-2 shadow-sm teacher-card' >
                <div className='mx-auto teacher-img' style={{ width: '95%' }} >
                    <img src={picture} className='rounded w-100 rounded-circle' height='' alt={name} />
                </div>
                <Card.Body >
                    <Card.Title className='text-primary text-center fw-bold mb-0'>{name}</Card.Title>
                    <Card.Text className='ps-3 text-center'>-{post}</Card.Text>
                    <Card.Text > Email:  <span className='fs-6'>{email} </span>  </Card.Text>
                    <Card.Text >  Phone: {phone}  </Card.Text>
                    <Card.Text >  Address: {address}  </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TeacherCard;