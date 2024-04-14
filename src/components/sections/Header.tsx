import { LogoImage } from "../../assets/index";
import { navBarItem } from "..";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="w-full flex items-center justify-between bg-white">
            <div className="w-[20%] flex items-center justify-center">
                <img src={LogoImage} className="" alt="" />
            </div>
            <div className="flex items-center justify-between">
                {navBarItem.map((item, index) => (
                    <Link to={`${item.link}`}>{item.name }</Link>
            ))}    
            </div>
            <div className="bg-primary">
                
            </div>
        </div>
    );
}

export default Header;
