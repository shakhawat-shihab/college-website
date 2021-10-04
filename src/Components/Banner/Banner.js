import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel fade
                activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item interval={2900}>
                    <img
                        className="d-block w-100 length"
                        src="https://i.imgur.com/hNolkdq.jpg"
                        alt="Annual Sports Day"
                    />
                    <Carousel.Caption>
                        <h3>Annual Sports Day</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100 length"
                        src="https://i.imgur.com/Qz40cdr.jpg"
                        alt="College Campus"
                    />
                    <Carousel.Caption>
                        <h3>College Campus</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2200}>
                    <img
                        className="d-block w-100 length"
                        src="https://i.imgur.com/f41V5gH.jpg"
                        alt="ICT Lab "
                    />
                    <Carousel.Caption>
                        <h3>ICT Lab </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2200}>
                    <img
                        className="d-block w-100 length"
                        src="https://i.imgur.com/XAfGk9j.jpg"
                        alt="College Auditorium "
                    />
                    <Carousel.Caption>
                        <h3>College Auditorium </h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;