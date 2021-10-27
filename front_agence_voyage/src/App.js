import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import HotelScreen from "./screens/HotelScreen";
import HomeScreen from "./screens/HomeScreen";
import VoitureScreen from "./screens/VoitureScreen";
import BateauScreen from "./screens/BateauScreen";
import VolScreen from "./screens/VolScreen";


const App = () => {

    return(
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Route path='/' component={HomeScreen}  exact/>
                    <Route path='/Hotels' component={HotelScreen} exact/>
                    <Route path='/Vols' component={VolScreen} exact/>
                    <Route path='/Bateau' component={BateauScreen} exact/>
                    <Route path='/Voitures' component={VoitureScreen} exact/>

                </Container>
            </main>
            <Footer />
        </Router>
    )
}
export default App;