import { LogoImage } from "../../assets/index";
import { navBarItem } from "..";

const Header = () => {
    return (
        <div className="w-full flex items-center justify-between bg-white h-[6rem] rounded-[10px]">
            <div className="w-[20%] flex items-center justify-center bg-sky-600 p-3">
                <img src={LogoImage} className="max-w-[100%] w-50" alt="" />
            </div>
            <div className="flex items-center justify-between">
                {navBarItem.map((item) => (
                    <a key={item.name} href={`${item.link}`} className="text-white">{item.name }</a>
            ))}    
            </div>
            <div className="bg-primary">
                
            </div>
        </div>
    );
}

export default Header;
