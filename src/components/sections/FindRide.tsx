import { useEffect, useState } from "react";
import { fetchCities } from "../../api/getCitie";

interface ILocation {
  id: string;
  name: string;
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
    <div className="flex w-full min-h-[5rem] p-3 md:px-[2rem] lg:px-[8rem] my-4">
      <form className="relative flex flex-col md:flex-row gap-[2rem] flex-wrap bg-white shadow-custom-shadow left-[50%] transform -translate-x-[50%] mt-[-10%] w-full p-[3rem] rounded-lg">
        <fieldset className="flex flex-col gap-4 basis-[33%]">
          <label className="font-[600]">From</label>
          <select
            name=""
            className="h-[4rem] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary"
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
        <fieldset className="flex flex-col gap-4 basis-[33%]">
          <label className="font-[600]">To</label>
          <select
            name=""
            className="h-[4rem] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary"
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
        <fieldset className="flex flex-col gap-4 basis-[33%]">
          <label className="font-[600]">Time</label>
          <select
            name=""
            className="h-[4rem] p-3 border-input-border rounded-md border-[2px] focus:outline-none cursor-pointer text-secondary"
          >
            <option selected className="text-borderColor">
              Select Time
            </option>
            {TIME &&
              TIME?.map((item, idx) => (
                <option key={idx} className="text-secondary">
                  {item}
                </option>
              ))}
          </select>
        </fieldset>
      </form>
    </div>
  );
}
