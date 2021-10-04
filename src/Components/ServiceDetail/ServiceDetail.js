// import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { MyContext } from '../../App';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    // const [services] = useServices([]);
    // console.log(services);
    // useEffect(() => {
    //     fetch('./services.json')
    //         .then(resp => resp.json())
    //         .then(json => console.log(json));
    // }, []);
    // if (service.length) {
    //     console.log('got');
    //     const temArr = service.find(x => x._id === serviceId);
    //     console.log(temArr);
    //     console.log(serviceId);
    // }
    let serv = [];
    const history = useHistory();
    const value = useContext(MyContext);
    //when all the data is not loaded yet then content have no value
    if (value.length === 0) {
        history.push('/services');
    }
    else {
        serv = value.find(x => x._id === serviceId);
    }
    function goBackHome() {
        history.push('/home');
    }
    return (
        <div className='my-3' >

            <Card className=' pb-3 pt-2 shadow-sm container border-0' >
                <div className='mx-auto '  >
                    <img src={serv?.picture} className='rounded w-100' height='250px' alt={serv?.service} />
                </div>
                <Card.Body >
                    <Card.Title className='text-primary text-center fw-bold pb-3'>{serv.service}</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                        {serv?.description}
                    </Card.Text>
                </Card.Body>
                <div className='px-2 d-flex justify-content-between'>
                    <h4 className='text-warning'>
                        {serv?.cost} ৳
                    </h4>
                    <Button variant='primary' onClick={goBackHome} >Go Back To Home</Button>
                </div>
            </Card>
        </div>
    );
};

export default ServiceDetail;