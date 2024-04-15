import { useEffect, useState } from "react";
import { fetchParcelType } from "../../api/getParcel";
import { bigLargeImage } from "../../assets";

interface IParcelType {
  id: string;
  name: string;
  amount: number;
  description: string;
  status: string;
  length: string;
  breadth: string;
  unit: string;
  images: [
    {
      id: string;
      context: string;
      image_url: string;
    }
  ];
}

function ParcelType() {
  const [parcelType, setParcelType] = useState<IParcelType[]>([]);
  useEffect(() => {
    fetchParcelType().then((parcelType: IParcelType[]) => {
      if (parcelType) {
        console.log("parcelType", parcelType);
        setParcelType(parcelType);
      }
    });
  }, []);

  return (
    <div className="flex w-full min-h-[50vh] p-3 md:px-[2rem] lg:px-[8rem] my-[5rem]">
      <div className="w-full flex flex-col justify-between items-center gap-2 lg:gap-[3rem]">
        <h1 className="text-secondary lg:text-[50px] md:text-[55px] sm:text-[40px] xs:text-[30px] text-[35px] self-start font-[700]">
          Our Parcel Type
        </h1>
        <div className="flex flex-col justify-between lg:flex-row gap-[5rem] lg:gap-1 flex-wrap">
          {parcelType.map((parcel) => (
            <div
              className="relative flex flex-col gap-2 mt-[5rem] lg:mt-0 md:w-[70%] md:mx-auto lg:basis-[24%] rounded-[1rem] min-h-[25rem] shadow-custom-shadow"
              key={parcel.id}
            >
              <div className="max-h-[50%] h-[50%] rounded-[1rem] overflow-hidden">
                <img
                  className="max-h-[100%] h-[100%] object-cover w-[100%] max-w-[100%]"
                  src={
                    parcel.images[0]?.image_url
                      ? parcel.images[0]?.image_url
                      : bigLargeImage
                  }
                  alt=""
                />
              </div>
              <div className="absolute bg-white top-[40%] z-20 w-[90%] min-h-[80%] left-[50%] transform translate-x-[-50%] flex flex-col items-center p-[2rem] gap-0 rounded-[1rem] shadow-custom-shadow">
                <span className="text-secondary font-[600] text-[2rem]">
                  {parcel.name}
                </span>
                <span className="font-[600] text-primary text-[1.5rem]">
                  N{parcel.amount}
                </span>

                <ul className="flex flex-col justify-center items-center mt-[2rem] gap-2">
                  <li className="text-secondary font-[600]">
                    Status: {parcel.status}
                  </li>
                  <li>
                    Length: {parcel.length} {parcel.unit}
                  </li>
                  <li className="text-secondary font-[600]">
                    Breadth: {parcel.breadth} {parcel.unit}
                  </li>
                </ul>
                <div className="flex items-center justify-center w-full">
                  <button className="bg-primary text-white rounded-full min-w-[10rem] py-4 font-bold  mt-[2.5rem] lg:mt-4 hover:bg-secondary hover:translate-y-[-10px] hover:transition-all duration-300 ease-in-out">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParcelType;
