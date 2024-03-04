import axios from 'axios';

export default function postService(formData) {
    const port = 'http://localhost:8000';
    const url = `${port}/category/addCategory`; // Removed extra slash
    const config = {
        headers: { // Corrected to lowercase 'headers'
            'content-type': 'multipart/form-data'
        }
    };
    return axios.get(url, formData, config); // Added config as the third argument
}
