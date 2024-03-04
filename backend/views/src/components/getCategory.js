import axios from 'axios';

export default function getService() {
    const host = 'http://localhost:8000';
    const url = `${host}/category/list`; // Removed extra slash
   
    return axios.get(url); // Added config as the third argument
}
