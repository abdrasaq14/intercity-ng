import { BusImage } from "../../assets/index";
const Hero = () => {
    return (
        <div className="bg-overlay h-[100vh] w-full" style={{
            '--overlay-image': `url(${BusImage})`,
            '--overlay-colors': "rgba(5, 5, 5, 0.5), rgba(5, 5, 5, 0.7)",
            '--overlay-angle': "90deg"
        } as React.CSSProperties}>
            <div className="hero-content">
                <h1>Bus Ticket Booking</h1>
                <p>Book your tickets in advance to avoid the rush</p>
                <button>Book Now</button>
            </div>
        </div>
    );
}

export default Hero;
