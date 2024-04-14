import { BusImage } from "../../assets/index";
import Header from "./Header";
const Hero = () => {
    return (
        <div className="bg-overlay h-[100vh] w-full md:px-15 lg:px-[5rem] py-6 flex flex-col" style={{
            '--overlay-image': `url(${BusImage})`,
            '--overlay-colors': "rgba(5, 5, 5, 0.5), rgba(5, 5, 5, 0.7)",
            '--overlay-angle': "90deg"
        } as React.CSSProperties}>
            <div className="w-full">
                <Header/>
            </div>
        </div>
    );
}

export default Hero;
