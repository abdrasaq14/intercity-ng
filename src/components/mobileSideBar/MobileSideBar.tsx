import { NavLink } from "react-router-dom";
import { navBarItem } from "..";

interface IMobileSideBarProps {
  onClick: () => void;
}
function MobileSideBar({ onClick }: IMobileSideBarProps) {
  return (
    <div className="fixed right-[0px] top-0 z-[60] w-[45vw] h-[100vh] bg-white pt-[5rem] px-[1.5rem]">
      <div className="flex flex-col lg:hidden items-start justify-center gap-[1rem]">
        {navBarItem.map((item) => (
          <NavLink
            key={item.name}
            to={`${item.link}`}
            className={({ isActive }) =>
              isActive
                ? "text-primary text-[1rem] hover:text-primary"
                : "text-secondary hover:text-primary text-[1rem]"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <span
        onClick={onClick}
        className="absolute h-[2rem] w-[2rem] top-[1%] left-[-1rem] bg-primary text-white rounded-full flex items-center justify-center shadow-custom-shadow cursor-pointer"
      >
        x
      </span>
    </div>
  );
}

export default MobileSideBar;
