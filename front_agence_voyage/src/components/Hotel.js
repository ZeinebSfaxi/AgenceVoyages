import React from 'react';
import "./1.jpg";
import moment from "moment";
import { useHistory} from "react-router-dom";


const Hotel = ({ hotel}) => {

    return (
        <>
            <td>{hotel.cin}</td>
            <td>{hotel.nomVoyageur}</td>
            <td>{hotel.prenomVoyageur}</td>
            <td>{hotel.nomHotel}</td>
            <td>{hotel.adresse}</td>
            <td>{moment(hotel.debut).fromNow()}</td>
            <td>{moment(hotel.fin).fromNow()}</td>

        </>

    );
};

export default Hotel;