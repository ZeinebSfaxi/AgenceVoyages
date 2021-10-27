import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import axios from "axios";
import Vol from "../components/Vol";
const VolScreen = () => {

    const [vols, setVols] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchHotels = () => {
        axios.get(`/reservation/reservationVols`, config).then(res => {
                //console.log(res.data._embedded.hotels)
            setVols(res.data._embedded.reservationVols)

            }
        )
    }

    useEffect(() => {
        fetchHotels()
        console.log(vols)
    }, [])

    return (
        <>
            <h1 className='mt-5'>Reservations Vols</h1>

            <Table striped bordered hover size="sm" className='mt-4'>
                <thead>
                <tr>
                    <th>CIN</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Pays</th>
                    <th>Nb Personne</th>
                    <th>Date Debut</th>
                    <th>Date Fin</th>
                </tr>
                </thead>
                <tbody>
                {vols.map(vol => (
                    <tr >
                        <Vol vol={vol} />
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default VolScreen;