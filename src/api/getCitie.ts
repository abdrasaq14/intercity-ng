import axiosInstance from "../utils/axiosInstance";

export const fetchCities = async () => {
  const res = await axiosInstance.get("/connections/routes")
  if (res.data.data.from_cities) {
    return res.data.data.from_cities
  }
  
}
