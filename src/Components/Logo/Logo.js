import React from 'react';
import img from '../../college-name.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='text-center bg-dark py-2'>
            <img src={img} alt="" className='wdth' />
        </div>
    );
};

export default Logo;