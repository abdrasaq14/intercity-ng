import { BusImage } from "../../assets/index";
import Header from "./Header";
import { heroItem } from "..";
const Hero = () => {
  return (
    <div
      className="bg-overlay min-h-[100vh] lg:min-h-[110vh] w-full p-3 md:px-[2rem] lg:px-[8rem] lg:mb-5 py-8 flex flex-col"
      style={
        {
          "--overlay-image": `url(${BusImage})`,
          "--overlay-colors": "rgba(5, 5, 5, 0.6), rgba(5, 5, 5, 0.9)",
          "--overlay-angle": "90deg",
        } as React.CSSProperties
      }
    >
      <div className="w-full min-h-[80vh] flex flex-col justify-between items-center gap-5 lg:gap-[5rem]">
        <Header />
        <div className="w-full flex justify-center lg:mt-0 lg:justify-end min-h-[80%] h-full items-center flex-1">
          <div className="w-full lg:w-[50%] flex flex-col p-4 lg:p-0 lg:items-start justify-center gap-0 lg:gap-[3rem] min-h-full">
            <h1 className="lg:text-[60px] md:text-[65px] sm:text-[50px] xs:text-[40px] text-[45px] text-primary font-[700] leading-[3rem] md:leading-[5rem] lg:leading-[20px]">
              {heroItem.h1[0]}
            </h1>
            <h1 className="lg:text-[60px] md:text-[65px] sm:text-[50px] xs:text-[40px] text-[45px] text-white font-[700] leading-[3rem] md:leading-[5rem] lg:leading-[20px]">
              {heroItem.h1[1]}
            </h1>
            <h1 className="lg:text-[60px]  md:text-[65px] sm:text-[50px] xs:text-[40px] text-[45px] text-white font-[700] leading-[3rem] md:leading-[5rem] lg:leading-[20px]">
              {heroItem.h1[2]}
            </h1>
            <p className="text-white text-lg md:w-[60%] lg:w-[70%] text-left mt-[1rem] lg:mt-2">
              {heroItem.p}
            </p>
            <div className="flex items-center justify-start w-full">
              <button className="bg-primary text-white rounded-full min-w-[10rem] py-4 font-bold  mt-[2.5rem] lg:mt-4 hover:bg-hover hover:translate-y-[-10px] hover:transition-all duration-300 ease-in-out">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
