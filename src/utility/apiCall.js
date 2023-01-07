import axios from "axios";
import { SERVER_URL } from "../configs/config";

const apiCall = axios.create({
    baseURL: SERVER_URL,
});

const getToken = () => {
    //return localStorage.getItem("token");
    return `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNjc2NDM5MjI0LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjYwODg3MjI0fQ.X6EnuvO5j5n9WLNrQUyJ9M4ABtDQpfsrjfWnts3GmPs`
};

// For GET requests
apiCall.interceptors.request.use(
    (req) => {
        // Add configurations here
        const accessToken = getToken();
        if (accessToken) {
            // ** eslint-disable-next-line no-param-reassign
            req.headers.authorization = `Bearer ${accessToken}`;
        }
        return req;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// For POST requests
apiCall.interceptors.response.use(
    (res) => {
        // Add configurations here
        if (res.status === 201) {
            console.log("Posted Successfully");
        }
        return res;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default apiCall;
