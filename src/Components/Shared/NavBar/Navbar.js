import { AiFillHome } from "react-icons/ai";
// import { AiFillProject } from "react-icons/ai";

export function Navbar() {
  return (
    <div className="w-full rounded-md md:hidden xl:hidden fixed z-50 top-auto bottom-0 p-4  ">
      <nav class="flex justify-evenly font-semibold text-sm  py-3 text-black bg-slate-200 shadow-lg shadow-slate-900 rounded-md overflow-hidden">
        <button className="flex flex-col justify-items-center ">
          <AiFillHome className="self-center w-4 h-4"></AiFillHome>
          Home
        </button>
        {/* <button className="flex flex-col justify-items-center">
          <AiFillProject className="self-center w-5 h-5"></AiFillProject>
          Projects
        </button> */}
      </nav>
    </div>
  );
}
