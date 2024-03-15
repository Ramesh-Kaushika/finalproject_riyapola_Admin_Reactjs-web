import axios from "axios";


const token = localStorage.getItem('stToken')

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
   // timeout: 1000,
    headers: {Authorization: `Bearer ${token}`}
});
