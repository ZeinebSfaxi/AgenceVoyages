import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Card, Button } from "react-bootstrap";
import Hotel from "../components/Hotel";
import axios from "axios";

import skin1 from './productsFolder/skin1.jpg'
import skin2 from './productsFolder/skin2.jpg'
import skin3 from './productsFolder/skin3.jpg'
import skin4 from './productsFolder/skin4.jpg'
import skin5 from './productsFolder/skin5.jpg'
import skin6 from './productsFolder/skin6.jpg'

import cat from './employees/cat.jpg'
import cat1 from './employees/cat2.jpg'
import cat2 from './employees/cat3.jpg'
import cat3 from './employees/cat4.jpg'
import { Link } from "react-router-dom";



const Skincares = () => {

    const photo = [skin1, skin2, skin3, skin4,skin5,skin6];
    const [skincares, setmSkincares] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchSkincares = () => {
        axios.get(`/skincares`, config).then(res => {
            // console.log(res.data.results.bindings);



            setmSkincares(res.data.results.bindings)

        }
        )
    }



    useEffect(() => {
        // fetchHotels()
        fetchSkincares();



    }, [])

    return (
        <>
            <div className="container">
                <div className="d-flex  justify-content-between mt-5">

                    <h1 className=''><i className="fas fa-hand-sparkles" style={{ color: "#860F30" }}></i>Skin Care</h1>
                    <Link to="/produits" className="rounded text-center card" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#F3ECEB' }}>Retour</Link>
                </div>

                <div className=" d-flex p-2 justify-content-center flex-wrap ">


                    {skincares.map((skincare, index) => (


                        <div className="mx-3 ">
                            <Card className="my-3 p-3 rounded card" style={{ width: '18rem', backgroundColor: '#F3ECEB' }}>
                                <Card.Img variant="top" src={photo[index]} style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title as='h5'>{skincare.marque.value}
                                    </Card.Title>
                                    <Card.Text as='div'>Prix:  {skincare.prix.value}</Card.Text>

                                </Card.Body>
                            </Card>








                        </div>
                    ))}

                </div>

            </div>



        </>
    );
};

export default Skincares;