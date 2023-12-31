import axios from "axios";

const api = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api/'
});

api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft: 
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A',
        Authorization: localStorage.getItem('USER_LOGIN') ? "Bearer " + JSON.parse(localStorage.getItem('USER_LOGIN')).accessToken : ''  
    };

    return config;
});


export default api;