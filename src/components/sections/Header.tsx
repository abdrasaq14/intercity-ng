import { LogoImage } from "../../assets/index";
import { navBarItem } from "..";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white h-[5rem] min-h-[5rem] rounded-[10px] overflow-hidden p-0 shadow-custom-shadow">
      <div className="w-[30%] lg:w-[15%] flex items-center justify-center p-3">
        <img src={LogoImage} className="max-w-[100%] lg:w-50" alt="" />
      </div>
      <div className="hidden lg:flex items-center justify-evenly w-[50%]">
        {navBarItem.map((item) => (
          <NavLink
            key={item.name}
            to={`${item.link}`}
            className={({ isActive }) =>
              isActive ? "text-primary text-[1.2rem] hover:text-primary" : "text-secondary hover:text-primary text-[1.2rem]"
            }
          >
            {item.name}
          </NavLink>
        ))}
          </div>
          <IoMdMenu className="lg:hidden text-3xl text-primary mr-3" />
      <div className="hidden lg:flex bg-primary flex-col text-white h-full items-center justify-center w-[20%] relative">
        <span className="font-medium text-[1.2rem]">Contact Us</span>
        <span className="text-sm">+2347010069307</span>
        <span className="bg-primary h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full absolute bottom-[25%] left-[-5%]">
          <FaPhone className="text-white" />
        </span>
      </div>
    </div>
  );
};

export default Header;
