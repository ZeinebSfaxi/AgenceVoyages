import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Card, Button } from "react-bootstrap";
import Hotel from "../components/Hotel";
import axios from "axios";


import image1 from './employees/image1.jpg'
import image2 from './employees/image2.jpg'
import image3 from './employees/image3.jpg'
import image4 from './employees/image4.jpg'

const Employees = () => {

    const photo = [image1, image2, image3, image4];
    const [employees, setEmployees] = useState([])

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },

    }
    //get posts
    const fetchemployees = () => {
        axios.get(`/employee`, config).then(res => {
            // console.log(res.data.results.bindings);



            setEmployees(res.data.results.bindings)

        }
        )
    }



    useEffect(() => {
        // fetchHotels()
        fetchemployees();



    }, [])

    return (
        <>
            <div className="">
                <h1 className='mt-5'><i className="fas fa-user" style={{ color: "#860F30" }}></i> Nos employés</h1>
                <div className=" d-flex p-2 justify-content-center ">


                    {employees.map((emplpyee, index) => (


                        <div className="mx-3 ">
                            <Card className="my-3 p-3 rounded card" style={{ width: '18rem', backgroundColor: '#F3ECEB' }}>
                                <Card.Img variant="top" src={photo[index]} style={{ width: '100%', height: '15vw', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title as='h5'>{emplpyee.prenom.value}  {emplpyee.nom.value}
                                    </Card.Title>
                                    <Card.Text as='div' >Genre: {emplpyee.genre.value == 'Female' ? <i class="fas fa-venus"></i> : <i class="fas fa-mars"></i>} </Card.Text>
                                    <Card.Text as='div'>Age:  {emplpyee.age.value}</Card.Text>
                                    <Card.Text as='div'>Experience:  {emplpyee.experience.value}</Card.Text>

                                </Card.Body>
                            </Card>








                        </div>
                    ))}

                </div>

            </div>



        </>
    );
};

export default Employees;