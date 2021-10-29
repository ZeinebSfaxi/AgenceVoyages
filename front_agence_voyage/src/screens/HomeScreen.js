import React from 'react';
import {Carousel,Container} from "react-bootstrap";
import image1 from './home/image1.jpg'
import image2 from './home/image2.jpg'
import image3 from './home/image3.jpg'


const HomeScreen = () => {
    return (
        <>
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{objectFit:"cover", width:"100%", height:"700px"}}
                        className="d-block w-100"
                        src={image2}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{backgroundColor: 'rgba(241, 179, 197, 0.7)'}}>
                        <h3>YOU DESERVE THE BEST</h3>
                        <p>Quality and quantity with the best prices.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{objectFit:"cover", width:"100%", height:"700px"}}
                        className="d-block w-100"
                        src={image1}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{backgroundColor: 'rgba(241, 179, 197, 0.7)' }}>
                        <h3>YOU DESERVE HAPPINESS</h3>
                        <p>Make yourself and your loved ones happy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{objectFit:"cover", width:"100%", height:"700px"}}
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{backgroundColor: 'rgba(241, 179, 197, 0.7)'}}>
                        <h3>YOU DESERVE CARE</h3>
                        <p>We care about you and will only provide the best.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
            <Container className="mt-5 mb-5" style={{backgroundColor:'#860F30', height:"125px", width:"100%"}}>
                <h2 className="text-center py-5" style={{color:'white'}}>because we care for your happiness</h2>
            </Container>
        </>
    );
};

export default HomeScreen;