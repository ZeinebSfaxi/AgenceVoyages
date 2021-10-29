import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Card, Button } from "react-bootstrap";
import Hotel from "../components/Hotel";
import axios from "axios";


import makeup1 from './productsFolder/makeup1.jpg'
import makeup2 from './productsFolder/makeup2.jpg'
import makeup3 from './productsFolder/makeup3.jpg'
import makeup4 from './productsFolder/makeup4.jpg'

import cat3 from './employees/cat4.jpg'
import { Link } from "react-router-dom";



const Maquillages = () => {

    const photo = [makeup1, makeup2, makeup3, makeup4];
    const [maquillages, setmMquillages] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchMaquillages = () => {
        axios.get(`/maquillages`, config).then(res => {
            // console.log(res.data.results.bindings);



            setmMquillages(res.data.results.bindings)

        }
        )
    }



    useEffect(() => {
        // fetchHotels()
        fetchMaquillages();



    }, [])

    return (
        <>
            <div className="container">
                <div className="d-flex  justify-content-between mt-5">

                    <h1 className=''><i className="fas fa-feather" style={{ color: "#860F30" }}></i>Maquillages</h1>
                    <Link to="/produits" className="rounded text-center card" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#F3ECEB' }}>Retour</Link>
                </div>
                <div className=" d-flex p-2 justify-content-center flex-wrap ">


                    {maquillages.map((maquillage, index) => (


                        <div className="mx-3 ">
                            <Card className="my-3 p-3 rounded card" style={{ width: '18rem', backgroundColor: '#F3ECEB' }}>
                                <Card.Img variant="top" src={photo[index]} style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title as='h5'>{maquillage.marque.value}
                                    </Card.Title>
                                    <Card.Text as='div'>Prix:  {maquillage.prix.value}</Card.Text>
                                    <Card.Text as='div'>Type:  {maquillage.type.value}</Card.Text>

                                </Card.Body>
                            </Card>








                        </div>
                    ))}

                </div>

            </div>



        </>
    );
};

export default Maquillages;