import { NavLink } from "react-router-dom";

export function PortfolioHeader() {
  return (
    <div className="flex justify-between shadow-md shadow-slate-800 bg-slate-200 h-16 bg-opacity-90 header text-xl text-gray-800">
      <div className="Name  text-center ml-5 md:text-left self-center md:ml-16 text-c3 md:font-semibold font-medium">
        <h1 className="font-bold text-slate-800 drop-shadow-lg shadow-black">
          Gourav Roy
        </h1>
      </div>
      <div className="flex flex-row text-xs md:text-lg self-center md:gap-5 md:mx-10 font-semibold invisible md:visible">
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-red-400 flex flex-col justify-items-center "
              : " flex flex-col justify-items-center "
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 flex flex-col justify-items-center "
              : " flex flex-col justify-items-center "
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 flex flex-col justify-items-center "
              : " flex flex-col justify-items-center "
          }
        >
          Projects
        </NavLink>
        <NavLink
          className="flex flex-col justify-items-center"
          onClick={() => {
            var element = document.getElementById("footer");
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}
