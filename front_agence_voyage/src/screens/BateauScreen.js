import React, {useEffect, useState} from 'react';
import { Table} from "react-bootstrap";
import Bateau from "../components/Bateau";
import axios from "axios";
import * as url from "url";

const BateauScreen = () => {

    const [bateaux, setBateaux] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchHotels = () => {
        axios.get(`/bateau/api/bateau`, config).then(res => {
                //console.log(res.data.bateaux)
               setBateaux(res.data.bateaux)

            }
        )
    }

    useEffect(() => {
        fetchHotels()
        console.log(bateaux)
    }, [])

    return (
        <>

            
            <h1 className='mt-5'>Reservations Bateaux</h1>

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
                {bateaux.map(bateau => (
                    <tr >
                        <Bateau bateau={bateau} />
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
};

export default BateauScreen;