import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://sandbox.myt40.com/api/v1/retailer/',
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = 'Bearer pk_$2y$10$CS3ALjvEUqqSyBTJLYK1m.mUyZgjrK05udslEiMTnOyu./5vS05QC'
        if (token) {
            config.headers["Authorization"] = token
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance