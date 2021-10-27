import React from 'react';
import moment from "moment";

const Bateau = ({bateau}) => {
    return (
        <>
        <td>{bateau.cin}</td>
        <td>{bateau.nom}</td>
        <td>{bateau.prenom}</td>
        <td>{bateau.email}</td>
        <td>{bateau.pays}</td>
        <td>{bateau.nbPersonne}</td>
        <td>{moment(bateau.dateDebut).fromNow()}</td>
        <td>{moment(bateau.dateFin).fromNow()}</td>
        </>
    );
};

export default Bateau;