import React from 'react';
import moment from "moment";

const Voiture = ({voiture}) => {
    return (
        <>
            <td>{voiture.cin}</td>
            <td>{voiture.nom}</td>
            <td>{voiture.prenom}</td>
            <td>{voiture.matricule}</td>
            <td>{voiture.typeVoiture}</td>
            <td>{voiture.couleur}</td>
            <td>{voiture.marque}</td>
            <td>{moment(voiture.dateDebut).fromNow()}</td>
            <td>{moment(voiture.dateFin).fromNow()}</td>

        </>

    );
};

export default Voiture;