import axios from "axios";
import { Mutex } from "async-mutex";

const mutex = new Mutex();

// Create axios instance with base configuration
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'https://dummyjson.com/',
    timeout: 10000,
});

const handleRefreshToken = async () => {
    return await mutex.runExclusive(async () => {
        const res = await instance.get('/api/v1/auth/refresh');
        if (res && res.data) return res.data.access_token;
        return null;
    });
};

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor
instance.interceptors.response.use(
    (response) => response,
    // (response) => response?.data ?? response,
    async (error) => {
        if (error?.response?.status === 401 && error.config) {
            const newAccessToken = await handleRefreshToken();
            if (newAccessToken) {
                error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                localStorage.setItem('access_token', newAccessToken);
                return instance.request(error.config);
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
