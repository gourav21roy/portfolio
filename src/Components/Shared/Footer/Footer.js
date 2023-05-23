import { IoSend } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
// import { SiLinkedin } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

export function Footer() {
  return (
    <div className="flex flex-col text-body text-c3 shadow-slate-800 drop-shadow-md  bg-black bg-opacity-40">
      <div className="flex flex-col md:m-16 m-5">
        <div className="text-2xl text-c1 font-semibold">Get In Touch</div>
        <div className="mt-3 text-xl">
          Excited to work together on something? I am always open to
          opportunities to learn something new everyday. Let’s connect!
        </div>
        <div className="md:w-72 flex flex-row self-center justify-center mt-3 text-lgrounded-md">
          <div className=" bg-black bg-opacity-70 p-3 rounded-l-md">
            gourav21roy@gmail.com
          </div>
          <button
            className="bg-blue-600 p-3 rounded-r-md"
            onClick={(e) => {
              window.location.href = "mailto:gourav21roy@gmail.com";
              e.preventDefault();
            }}
          >
            <IoSend />
          </button>
        </div>
        <div className="flex flex-row gap-3 self-center m-4">
          <a
            href="https://www.linkedin.com/in/gourav21roy"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin className="w-8 h-8 hover:text-blue-700 hover:bg-white hover:rounded-md" />
          </a>
          <a
            href="https://www.github.com/gourav21roy"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub className="w-8 h-8 hover:text-black  hover:bg-white hover:rounded-3xl" />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/gourav21roy"
            target="_blank"
            rel="noreferrer"
          >
            <SiGeeksforgeeks className="w-8 h-8 hover:text-green-600  hover:bg-white hover:rounded-3xl p-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
