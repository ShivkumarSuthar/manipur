import axios from 'axios';

export default function postService(formData) {
    const port = 'http://localhost:8000';
    const url = `${port}/category/addCategory`;

    // Convert formData to URLSearchParams to encode it properly
    const params = new URLSearchParams();
    for (const pair of formData.entries()) {
        params.append(pair[0], pair[1]);
    }

    // Set proper content-type header and use URLSearchParams
    const config = {
        headers: {
            'content-type': "application/x-www-form-urlencoded"
        }
    };

    return axios.post(url, params, config)
        .then(response => {
            return response.data; // Return response data if needed
        })
        .catch(error => {
            throw error; // Throw error for proper error handling
        });
}
