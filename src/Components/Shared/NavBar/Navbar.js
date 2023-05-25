import {
  AiFillCode,
  AiFillContacts,
  AiFillHome,
  AiFillProfile,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <div className="w-full rounded-md md:hidden xl:hidden fixed z-50 top-auto bottom-0 p-4  ">
        <nav className="flex justify-evenly font-semibold text-sm  py-2 text-black bg-slate-200 shadow-lg shadow-slate-900 rounded-md overflow-hidden">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-red-400 flex flex-col justify-items-center "
                : " flex flex-col justify-items-center "
            }
          >
            <AiFillHome className="self-center w-5 h-5"></AiFillHome>
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-red-400 flex flex-col justify-items-center "
                : " flex flex-col justify-items-center "
            }
          >
            <AiFillProfile className="self-center w-5 h-5"></AiFillProfile>
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-red-400 flex flex-col justify-items-center "
                : " flex flex-col justify-items-center "
            }
          >
            <AiFillCode className="self-center w-5 h-5"></AiFillCode>
            Projects
          </NavLink>
          <NavLink
            onClick={() => {
              var element = document.getElementById("footer");
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
            className="flex flex-col justify-items-center"
          >
            <AiFillContacts className="self-center w-5 h-5"></AiFillContacts>
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
