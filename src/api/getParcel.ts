import axiosInstance from "../utils/axiosInstance";

export const fetchParcelType = async () => {
  const res = await axiosInstance.get("/parcels/sizes")
  if (res.data.data) {
    return res.data.data
  }
  
}
