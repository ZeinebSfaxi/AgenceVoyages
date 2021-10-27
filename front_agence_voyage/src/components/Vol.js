import React from 'react';
import moment from "moment";

const Vol = ({vol}) => {
    return (
        <>
            <td>{vol.cin}</td>
            <td>{vol.nom}</td>
            <td>{vol.prenom}</td>
            <td>{vol.email}</td>
            <td>{vol.pays}</td>
            <td>{vol.nbPersonne}</td>
            <td>{moment(vol.dateDebut).fromNow()}</td>
            <td>{moment(vol.dateFin).fromNow()}</td>

        </>

    );
};

export default Vol;