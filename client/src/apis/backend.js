import axios from 'axios';

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});

backend.interceptors.response.use(response => {
    return response;
}, err => {
    return new Promise((resolve, reject) => {
        const originalReq = err.config;

        // console.log(err.response.data);
        
        if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            originalReq._retry = true;

            let res = fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/refresh-token`, {
                method: 'POST',
                credentials: 'include',
            }).then(res => res.json()).then(res => {
                // console.log(res);
                originalReq.headers['Authorization'] = `Bearer ${res.jwtToken}`;
                return axios(originalReq);
            });

            return resolve(res);
        }

        return reject(err.response.data);
    });
});

export default backend;