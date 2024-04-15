import { useEffect, useState } from "react";
import { fetchCities } from "../../api/getCitie";

interface ILocation {
  id: string;
  name: string;
}

interface ItripDetils {
  from_city: string;
  to_city: string;
  departure_date: string;
}
const TIME = ["08:00AM", "10:00AM", "01:00PM", "03:00PM", "05:00PM", "07:00PM"];
export default function FindRide() {
  const [locations, setLocations] = useState<ILocation[]>([]);
  useEffect(() => {
    fetchCities().then((res) => {
      if (res) {
        setLocations(res);
      }
    });
  }, []);
  return (
    <>
      <div className="h-[4rem] min-w-[25rem] fixed bottom-[2%] left-0 bg-warning z-50 rounded-lg shadow-custom-shadow">
        <span className="h-[20px] w-[20px] bg-[red] absolute top-[-15%] right-[-10px] rounded-full flex items-center justify-center text-white cursor-pointer">
          x
        </span>
      </div>
      <div className="flex w-full min-h-[5rem] p-3 md:px-[2rem] lg:px-[8rem] my-4">
        <form className="relative flex flex-col justify-between lg:flex-row gap-[2rem] flex-wrap bg-white shadow-custom-shadow left-[50%] transform -translate-x-[50%] mt-[-10%] w-full p-[3rem] rounded-lg">
          <fieldset className="flex flex-col gap-2 lg:basis-[47%]">
            <label className="font-[600]">From</label>
            <select
              name=""
              className="h-[4rem] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary w-[100%]"
            >
              <option selected className="text-borderColor">
                Select Destination
              </option>
              {locations &&
                locations?.map((location) => (
                  <option key={location.id} className="text-secondary">
                    {location.name}
                  </option>
                ))}
            </select>
          </fieldset>
          <fieldset className="flex flex-col gap-2 lg:basis-[47%] w-[100%]">
            <label className="font-[600]">To</label>
            <select
              name=""
              className="h-[4rem] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary w-[100%]"
            >
              <option selected className="text-borderColor">
                Select Destination
              </option>
              {locations &&
                locations?.map((location) => (
                  <option key={location.id} className="text-secondary">
                    {location.name}
                  </option>
                ))}
            </select>
          </fieldset>
          <fieldset className="flex flex-col gap-2 lg:basis-[47%]">
            <label className="font-[600]">When</label>

            <input
              type="date"
              className="h-[4rem] w-[100%] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary"
              placeholder="Select Date"
            />
          </fieldset>

          <div className="flex flex-col lg:basis-[47%] justify-end">
            <button className="bg-primary text-white rounded-full w-[100%] h-[4rem] font-bold hover:bg-hover hover:translate-y-[-10px] hover:transition-all duration-300 ease-in-out">
              Find ride
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
