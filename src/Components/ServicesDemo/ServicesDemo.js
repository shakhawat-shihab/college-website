import React from 'react';
import useServices from '../../Hooks/useServices';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Row } from 'react-bootstrap';

const ServicesDemo = () => {
    const [services] = useServices();
    return (
        <div className='px-3 my-5'>
            <h2 className='text-center mb-3 fw-bold'>Services By Us</h2>
            <Row md={3} lg={4} sm={2} xs={1} className="g-3">
                {services.slice(0, 4).map(x => <ServiceCard data={x} key={x._id} ></ServiceCard>)}
            </Row>
        </div>
    );
};

export default ServicesDemo;