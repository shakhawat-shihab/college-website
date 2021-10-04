import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './ServiceCard.css'
const ServiceCard = (props) => {
    const { service, picture, description, cost } = props.data;
    return (
        <Col>
            <Card className='h-100 pb-3 pt-2 shadow-sm service-card' >
                <div className='mx-auto ' style={{ width: '95%' }} >
                    <img src={picture} className='rounded w-100' height='250px' alt={service} />
                </div>
                <Card.Body >
                    <Card.Title className='text-primary fw-bold pb-3'>{service}</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                        {description.length >= 250 ? description.substring(0, 250).concat('...') : description}
                    </Card.Text>
                </Card.Body>
                <div className='px-2 d-flex justify-content-between'>
                    <h4 className='text-warning'>
                        {service.includes('Indoor and Outdoor Sports') &&
                            < span style={{ textDecoration: 'line-through', textDecorationStyle: 'double' }}
                                className='pe-1'
                            > 50 </span>}
                        {cost} ৳
                    </h4>
                    <Button variant='primary'>Add to My Account</Button>
                </div>
            </Card>
        </Col>
    );
};

export default ServiceCard;