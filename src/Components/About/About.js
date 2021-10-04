import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            <div class='container mt-4 mb-4' >
                <h2 className='fw-bold text-center'>About CBC</h2>
                <div class='row justify-content-between mt-2 g-md-5  gy-4'>
                    <div class='col-md-5 col-sm-5'>
                        <div >
                            <h2 className='text-center'>Welcome to <br /> Chattogram Bandar College</h2>
                            <p className='pt-3 text-justified'>Chittagong Port College is one of the welfare institutions run by Chittagong Port Authority, the main driving-force of the economy of Bangladesh. This college started its journey with a view to ensuring quality education enriched with modern information and technology. To build up skilled, proficient and morally upgraded citizens facing the challenge of the 21.</p>
                            <button className='btn btn-primary'>Learn More</button>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-7 '>
                        <div >
                            <div className='row w-100 align-items-center'>
                                <div className='col-md-5'>
                                    <img src="https://i.imgur.com/PESh8dM.png" alt="" width='100%' />
                                </div>
                                <div className='col-md-7'>
                                    <h4 className='' >Chairman's Message</h4>
                                    <div>
                                        <h5 className='text-primary'>Rear Admiral M. Shahjahan, NPP, NDC, PSC, BN</h5>
                                        <h6>Chairman</h6>
                                        <h6>Chittagong Port Authority & Chattogram Bandar College</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <p className='text-justified'>
                                    There is no denying the fact that mobility of Chittagong Port means the overall development of national economy. We really take pride in being a part of this driving force.

                                    Living in an era of science and technology, our education sector is influenced by the global change of information and communication everyday. Chittagong Port College, a welfare institution of Chittagong Port Authority, has been keeping pace with this trend since its inception. Besides contributing to the education of the children of the port officials, it has radically changed the traditional concept of education in this locality.

                                    I am glad to be informed of the immense importance of the college website named http://cpc.edu.bd. I wish a successful contribution of this website to the education sector of this locality. May almighty be with us in this Journey.</p>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div>
                            <div className='row w-100 '>
                                <div className='col-md-5'>
                                    <img src="https://i.imgur.com/PaMKZVT.png" alt="" width='100%' />
                                </div>
                                <div className='col-md-7'>
                                    <h4 className='' >Principal's Message:</h4>
                                    <div>
                                        <h5 className='text-primary'>Mitali Palit</h5>
                                        <h6>Principal (In-CHarge)</h6>
                                        <h6>Chattogram Bandar College</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <p className='text-justified'>
                                    Man’s access to virtual world besides mundane world is unfathomable in this modern civilization. To grasp the world within one’s fist is only a click away on a button and this could be done with information technology. There is no alternative to being competently ahead keeping pace with the modern era. The use of information technology with the advancement of Chattogram Bandar College to dictate the youth towards golden future with the slogan ‘Good citizens through quality Education’ is a milestone.
                                    This college is conscious of using information technology to materialize the long-cherished dream of Port locality since its establishment. I feel really glad to know that a website enriched with all information, aim and success of our college as well as various branches of knowledge is going to be opened for all. My special thanks and gratitude to the present honorable chairman of Chittagong Port Authority for remaining beside us as a pioneer in this journey. I am grateful to all those who contributed to the development of this website from the very outset and hope that they will continue this to keep us updated. At the end, I expect the co-operation of all stakeholders so that this website will present Chattogram Bandar College a role model not only in Chittagong but  also throughout the country.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;