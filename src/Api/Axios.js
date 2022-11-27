//To allow us setup some default configurations required for AXIOS http calls

import axios from "axios";

const BASE_URL = "http://localhost:5009";



export default axios.create({
    //for basic request which does not require credentials
    baseURL: BASE_URL
});


export const axiosReqCredentials = axios.create({
    //for request that require credentials
    baseURL: BASE_URL,
    withCredentials: true,
    headers:{"Content-Type": "application/json"}
});