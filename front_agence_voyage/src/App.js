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
import Employees from './screens/Employees';
import Products from './screens/Products';
import Parfum from './screens/Parfum';
import Maquillages from './screens/Maquillages';
import Skincares from './screens/Skincares';


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
                    <Route path='/employees' component={Employees} exact/>
                    <Route path='/produits' component={Products} exact/>
                    <Route path='/parfums' component={Parfum} exact/>
                    <Route path='/maquillages' component={Maquillages} exact/>
                    <Route path='/skincare' component={Skincares} exact/>


                </Container>
            </main>
            <Footer />
        </Router>
    )
}
export default App;