import { useEffect, useState } from "react";
import { fetchCities } from "../../api/getCitie";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
import Loader from "../loader/Loader";

interface ILocation {
  id: string;
  name: string;
}

interface ItripDetils {
  from_city: string;
  to_city: string;
  departure_date: string;
}
export default function FindRide() {
  const [locations, setLocations] = useState<ILocation[]>([]);
  const [tripDetails, setTripDetails] = useState<ItripDetils>({
    from_city: "",
    to_city: "",
    departure_date: "",
  });
  const [error, setError] = useState("");
  const [availableRides, setAvailableRides] = useState<ItripDetils[]>([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchCities().then((res) => {
      if (res) {
        setLocations(res);
      }
    });
  }, []);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (
      !tripDetails.from_city ||
      !tripDetails.to_city ||
      !tripDetails.departure_date
    ) {
      setIsLoading(false);
      setError("All fields are required");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    try {
      const res = await axiosInstance.get("/connections/find", {
        params: {
          from_city: tripDetails.from_city,
          to_city: tripDetails.to_city,
          departure_date: tripDetails.departure_date,
          per_page: "10",
          page: "1",
        },
      });
      if (res.data.message) {
        setIsLoading(false);
        setError(res.data.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        setIsLoading(false);
        setAvailableRides(res.data.data);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    }
  };
  return (
    <>
      {error && (
        <div className="h-[4rem] min-w-[25rem] fixed bottom-[2%] left-0 bg-warning z-50 rounded-lg shadow-custom-shadow text-secondary text-bold text-[1.2rem] flex items-center justify-center animate-error-animation">
          <span
            onClick={() => setError("")}
            className="h-[20px] w-[20px] bg-[red] absolute top-[-15%] right-[-10px] rounded-full flex items-center justify-center text-white cursor-pointer"
          >
            x
          </span>
          <p>{error}</p>
          <hr className="absolute h-[5px] w-[100%] bottom-0 left-0 bg-[red] animate-line-animation" />
        </div>
      )}
      <div className="flex w-full min-h-[5rem] p-3 md:px-[2rem] lg:px-[8rem] my-4">
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col justify-between lg:flex-row gap-[2rem] flex-wrap bg-white shadow-custom-shadow left-[50%] transform -translate-x-[50%] mt-[-10%] w-full p-[3rem] rounded-lg"
        >
          <fieldset className="flex flex-col gap-2 lg:basis-[47%]">
            <label className="font-[600]">From</label>
            <select
              name="from_city"
              className="h-[4rem] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary w-[100%]"
              onChange={handleInputChange}
            >
              <option selected className="text-borderColor">
                Select Destination
              </option>
              {locations &&
                locations?.map((location) => (
                  <option
                    key={location.id}
                    className="text-secondary"
                    value={location?.name}
                  >
                    {location.name}
                  </option>
                ))}
            </select>
          </fieldset>
          <fieldset className="flex flex-col gap-2 lg:basis-[47%] w-[100%]">
            <label className="font-[600]">To</label>
            <select
              className="h-[4rem] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary w-[100%]"
              onChange={handleInputChange}
              name="to_city"
            >
              <option selected className="text-borderColor">
                Select Destination
              </option>
              {locations &&
                locations?.map((location) => (
                  <option
                    key={location.id}
                    className="text-secondary"
                    value={location?.name}
                  >
                    {location.name}
                  </option>
                ))}
            </select>
          </fieldset>
          <fieldset className="flex flex-col gap-2 lg:basis-[47%]">
            <label className="font-[600]">When</label>

            <input
              type="date"
              name="departure_date"
              className="h-[4rem] w-[100%] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary"
              value={tripDetails.departure_date}
              onChange={handleInputChange}
            />
          </fieldset>

          <div className="flex flex-col lg:basis-[47%] justify-end">
            <button
              disabled={isloading}
              className="bg-primary text-white rounded-full w-[100%] h-[4rem] font-bold hover:bg-hover hover:translate-y-[-10px] hover:transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:hover:cursor-not-allowed"
            >
              {isloading ? <Loader /> : "Find ride"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
