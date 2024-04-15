import axiosInstance from "../utils/axiosInstance";

export const fetchCities = async () => {
  const res = await axiosInstance.get("/connections/routes")
  if (res.data.data.from_cities) {
    return res.data.data.from_cities
  }
  
}
// const sdk = require('api')('@intercity/v2.0#i6owflu0yhhqv');

// sdk.auth('Bearer pk_$2y$10$CS3ALjvEUqqSyBTJLYK1m.mUyZgjrK05udslEiMTnOyu./5vS05QC');
// sdk.cities()
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));