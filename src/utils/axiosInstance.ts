import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://sandbox.myt40.com/api/v1/retailer',
    withCredentials: true
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = 'Bearer pk_$2y$10$CS3ALjvEUqqSyBTJLYK1m.mUyZgjrK05udslEiMTnOyu./5vS05QC'
        if (token) {
            config.headers["Authorization"] = token
            config.headers["Content-Type"] = "application/json"
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance
// https://sandbox.myt40.com/api/v1/retailer/connections/find?from_city=Abuja&to_city=Abuja&departure_date=2024-04-25&per_page=10&page=1
// https://sandbox.myt40.com/api/v1/retailer/connections/find?from_city=Aba&to_city=Abia&departure_date=2024-02-12&per_page=10&page=1&exclude_business[]=