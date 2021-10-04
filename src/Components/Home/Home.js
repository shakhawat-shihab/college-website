import React from 'react';
import Banner from '../Banner/Banner';
import ServicesDemo from '../ServicesDemo/ServicesDemo';
import TeachersDemo from '../TeachersDemo/TeachersDemo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesDemo></ServicesDemo>
            <TeachersDemo></TeachersDemo>
        </div>
    );
};

export default Home;