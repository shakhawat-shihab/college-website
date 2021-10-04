import React from 'react';
import img from '../../loc.PNG'
const Footer = () => {
    return (
        <div className='' >
            <div className='row m-0 bg-dark py-3 '>
                <div className='col-lg-6 d-flex  justify-content-center'>
                    <div>
                        <h3 className='text-primary'>Location</h3>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className='col-lg-6 d-flex  justify-content-center align-items-center'>
                    <div>
                        <h3 className='text-primary my-4'>Contact</h3>
                        <h5 className='text-white my-3'> <i className="fas fa-map-marker-alt pe-2 text-warning"></i> Chattogram Bandar College, Opposite of Port Republic club, Port Area, Chattogram 4100</h5>
                        <h5 className='text-white my-3'> <i className="fas fa-phone pe-2 text-success"></i> +031-2524634</h5>
                        <h5 className='text-white my-3'> <i className="fas fa-envelope pe-2 text-danger"></i> ctgportcollege2013@gmail.com</h5>
                    </div>
                </div>
            </div>
            <p className='py-4 border-top bg-dark text-center text-info m-0 fs-5'>
                2021 @ <span className='text-danger'>Shakhawat Shihab</span>  - All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;