import React, {useEffect, useState} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import Hotel from "../components/Hotel";
import axios from "axios";

const HotelScreen = () => {

    const [hotels, setHotels] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchHotels = () => {
        axios.get(`/hotel/hotels`, config).then(res => {
          //console.log(res.data._embedded.hotels)
            setHotels(res.data._embedded.hotels)

            }
        )
    }

    useEffect(() => {
        fetchHotels()
        console.log(hotels)
    }, [])

    return (
        <>
         <h1 className='mt-5'>Reservations Hotels</h1>

            <Table striped bordered hover size="sm" className='mt-4'>
                <thead>
                <tr>
                    <th>CIN</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Hotel</th>
                    <th>Adresse</th>
                    <th>Date Debut</th>
                    <th>Date Fin</th>
                </tr>
                </thead>
                <tbody>
                {hotels.map(hotel => (
                    <tr >
                        <Hotel hotel={hotel} />
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default HotelScreen;