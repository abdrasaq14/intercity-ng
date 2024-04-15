import { LogoImageWhite } from "../../assets";
import { navBarItem } from "..";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="flex flex-col md:flex-row  justify-between px-[2rem] md:px-[6rem] h-[20rem] bg-[#050505] mt-[10rem]">
      <div className="h-[100%] md:basis-[50%] flex items-center justify-start">
        <img src={LogoImageWhite} className=" max-w-[10rem] lg:max-w-[15rem]" />
      </div>
      <div className="h-[100%] md:basis-[30%] flex flex-col items-start justify-center">
        <h1 className="text-white font-[700] text-[1.5rem]">Company</h1>
        <div className="flex flex-col gap-2">
          {navBarItem.map((item) => (
            <Link
              key={item.name}
              to={`${item.link}`}
              className="text-white text-[1rem] hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
