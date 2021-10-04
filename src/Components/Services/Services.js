import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services] = useServices();
    return (
        <div className='px-3 my-4 '>
            <h2 className='text-center mb-3 fw-bold  '>Services By Us </h2>
            <Row md={3} lg={4} className="g-3">
                {services.map(x => <ServiceCard data={x} key={x._id} ></ServiceCard>)}
            </Row>
        </div>
    );
};

export default Services;