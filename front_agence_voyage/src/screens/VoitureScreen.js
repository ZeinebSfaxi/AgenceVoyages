import React, {useEffect, useState} from 'react';
import { Table} from "react-bootstrap";
import axios from "axios";
import Voiture from "../components/Voiture";


const VoitureScreen = () => {

    const [voitures, setVoitures] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchVoitures = () => {
        axios.get(`/voiture/locationVoitures`).then(res => {
                //console.log(res.data._embedded.locationVoitures)
            setVoitures(res.data._embedded.locationVoitures)

            }
        )
    }

    useEffect(() => {
        fetchVoitures()
        console.log(voitures)
    }, [])

    return (
        <>
            <h1 className='mt-5'>Locations Voitures</h1>

            <Table striped bordered hover size="sm" className='mt-4'>
                <thead>
                <tr>
                    <th>CIN</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Matricule</th>
                    <th>Type</th>
                    <th>Couleur</th>
                    <th>Marque</th>
                    <th>Date Debut</th>
                    <th>Date Fin</th>
                </tr>
                </thead>
                <tbody>
                {voitures.map(voiture => (
                    <tr >
                        <Voiture voiture={voiture} />
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default VoitureScreen;