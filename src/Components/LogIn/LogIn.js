import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import img from '../../stu.png'

const LogIn = () => {
    return (
        <div className='container'>
            <div className='row my-5 gy-3 mx-0 justify-content-between'>
                <div className='col-md-6 col-sm-6 col-5 textx-center'>
                    <div class='d-flex justify-content-center'>
                        <img src={img} alt="" width='80%'
                            className='rounded' />
                    </div>

                </div>
                <div className='col-md-5 col-sm-6 col-12 d-flex flex-column justify-content-center  '>
                    <div class=' '>
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
                        <Button variant="primary" type="submit">
                            Log In
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LogIn;