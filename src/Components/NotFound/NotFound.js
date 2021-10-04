import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div class='text-danger text-center my-5 py-5 fw-bold' >
            <h2 class='code my-2 py-3' >404</h2>
            <h5 className='fs-1 fw-bolder'>Page not Found</h5>
            <h4 className='my-3 pb-3'>Go to<Link to='/home' className='text-decoration-none'> Home Page</Link></h4>
        </div>
    );
};

export default NotFound;