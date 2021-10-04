// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    // const [service, setService] = useState([]);
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
    return (
        <div style={{ height: '700px' }}>
            <h2 >{serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;