import axios from "axios";

const url ='http://localhost:8762/hotel/hotels';

export const fetchHotels = () => axios.get(url);