import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Card, Button } from "react-bootstrap";
import Hotel from "../components/Hotel";
import axios from "axios";


import parfum1 from './productsFolder/lancomParfum.jpg'
import parfum2 from './productsFolder/parfum2.jpg'
import parfum3 from './productsFolder/parfum3.jpg'
import parfum4 from './productsFolder/parfum4.jpg'

import cat3 from './employees/cat4.jpg'
import { Link } from "react-router-dom";



const Parfum = () => {

    const photo = [parfum1, parfum2, parfum3, parfum4];
    const [parfums, setParfum] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchParfum = () => {
        axios.get(`/parfums`, config).then(res => {
            // console.log(res.data.results.bindings);



            setParfum(res.data.results.bindings)

        }
        )
    }



    useEffect(() => {
        // fetchHotels()
        fetchParfum();



    }, [])

    return (
        <>
            <div className="container">

                <div className="d-flex  justify-content-between mt-5">

                    <h1 className=''><i className="fas fa-air-freshener" style={{ color: "#860F30" }}></i>Parfums</h1>
                    <Link to="/produits" className="rounded text-center card" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#F3ECEB' }}>Retour</Link>
                </div>

                <div className=" d-flex p-2 justify-content-center flex-wrap ">


                    {parfums.map((parfum, index) => (


                        <div className="mx-3 ">
                            <Card className="my-3 p-3 rounded card" style={{ width: '18rem', backgroundColor: '#F3ECEB' }}>
                                <Card.Img variant="top" src={photo[index]} style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title as='h5'>{parfum.marque.value}
                                    </Card.Title>
                                    <Card.Text as='div'>Prix:  {parfum.prix.value}</Card.Text>

                                </Card.Body>
                            </Card>








                        </div>
                    ))}

                </div>

            </div>



        </>
    );
};

export default Parfum;