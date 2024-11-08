import axios from "axios";

const instance = axios.create({
    baseURL: 'https://be-st-production.up.railway.app/api/',
    headers: {
        "Content-Type": "application/json",
    }
});

export default instance;