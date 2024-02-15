import axios from 'axios'

const apiUrl="http://localhost:8000"
export default async function uploadImage(data) {
try{
const api= await axios.post(`${apiUrl}/upload`, data);
return api.data;
}
catch(error){
    console.log("Error while Calling api", error.message)
}
}
