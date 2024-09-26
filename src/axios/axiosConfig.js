// axiosConfig.js
import axios from 'axios';


const axiosInstance = axios.create({

    baseURL: '/',
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}` ,
        'Content-Type': 'application/json'
    }
});


export default axiosInstance;