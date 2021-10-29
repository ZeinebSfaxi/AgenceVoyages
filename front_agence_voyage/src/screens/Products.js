import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Card, Button } from "react-bootstrap";
import Hotel from "../components/Hotel";
import axios from "axios";
import { Link } from "react-router-dom";

import cat from './employees/cat.jpg'
import cat1 from './employees/cat2.jpg'
import cat2 from './employees/cat3.jpg'
import cat3 from './employees/cat4.jpg'
import makeup4 from './productsFolder/makeup4.jpg'
import makeup1 from './productsFolder/makeup1.jpg'
import parfum3 from './productsFolder/parfum3.jpg'
import skin1 from './productsFolder/skin1.jpg'
import skin4 from './productsFolder/skin4.jpg'
import parfum4 from './productsFolder/parfum4.jpg'
import hair1 from './productsFolder/hair1.jpg'
import skin2 from './productsFolder/skin2.jpg'
import skin3 from './productsFolder/skin3.jpg'
import makeup2 from './productsFolder/makeup2.jpg'
import makeup3 from './productsFolder/makeup3.jpg'
import hair2 from './productsFolder/hair2.jpg'
import parfum2 from './productsFolder/parfum2.jpg'
import hair3 from './productsFolder/hair3.jpg'
import skin5 from './productsFolder/skin5.jpg'
import skin6 from './productsFolder/skin6.jpg'

import parfum1 from './productsFolder/lancomParfum.jpg'

const Products = () => {

    const photo = [makeup4, makeup1, parfum3, skin1,skin4,parfum4,hair1,skin2,skin3,makeup2,makeup3,hair2,parfum2,hair3,skin5,skin6,parfum1];
    const [products, setproducts] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchProducts = () => {
        axios.get(`/produits`, config).then(res => {
            // console.log(res.data.results.bindings);



            setproducts(res.data.results.bindings)

        }
        )
    }



    useEffect(() => {
        // fetchHotels()
        fetchProducts();



    }, [])

    return (
        <>  <div className="d-flex align-items-start">
                <div className="d-flex  flex-column    justify-content-center" style={{marginTop:'120px'}}>
                    <Link to="/parfums" className="rounded my-2 text-center card" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#F3ECEB' }}>Parfums</Link>
                    <Link to="/maquillages" className="rounded  my-2 text-center card" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#F3ECEB' }}>Maquillages</Link>
                    <Link to="/skincare" className="rounded  my-2 text-center card" style={{ textDecoration: 'none', padding: '10px', backgroundColor: '#F3ECEB' }}>Skin Care</Link>

                </div>

            <div className="">
                <h1 className='mt-5'><i className="fas fa-heart" style={{ color: "#860F30" }}></i> Nos Produits</h1>
                
                <div className=" d-flex p-2 justify-content-center flex-wrap ">


                    {products.map((produit, index) => (


                        <div className="mx-3 ">
                            <Card className="my-3 p-3 rounded card" style={{ width: '18rem', backgroundColor: '#F3ECEB' }}>
                                <Card.Img variant="top" src={photo[index]} style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title as='h5'>{produit.marque.value}
                                    </Card.Title>
                                    <Card.Text as='div'>Prix:  {produit.prix.value}</Card.Text>

                                </Card.Body>
                            </Card>








                        </div>
                    ))}

                </div>

            </div>
            </div>


        </>
    );
};

export default Products;