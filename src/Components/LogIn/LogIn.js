import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import img from '../../stu.png'

const LogIn = () => {
    return (
        <div className='container'>
            <div className='row mt-3 mb-5 gy-3 mx-0 justify-content-between'>
                <div className='col-md-6 col-sm-6 col-12 d-flex justify-content-center'>
                    <div className='text-center px-5 px-sm-0'>
                        <img src={img} alt="" width='80%'
                            className='rounded' />
                    </div>
                </div>
                <div className='col-md-6 col-sm-6 col-12 d-flex flex-column justify-content-center  '>
                    <div className=' '>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                        <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I Agree to termn & conditions " />
                        </Form.Group>
                        <div className='text-center'>
                            <Button variant="primary" className='form-control form-control-lg' type="submit">
                                Log In
                            </Button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default LogIn;