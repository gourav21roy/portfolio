import { AiFillEye, AiFillGithub } from "react-icons/ai";

export function Project(props) {
  return (
    <div className="flex my-10 w-full justify-between text-c3 flex-col self-center shadow-md shadow-slate-800 bg-slate-600 bg-opacity-50 rounded-md p-3 md:p-9 md:flex-row columns-2">
      <div className="flex p-3">
        <img
          className="rounded-md md:max-w-lg"
          src={props.mockup}
          alt="mockup"
        ></img>
      </div>
      <div className="flex flex-col">
        <div className="p-3 md:text-4xl font-semibold md:my-2 text-right text-white">
          {props.title}
        </div>
        <div className="md:my-5 mt-3 text-center self-end text-sm p-2 m-1 bg-green-300 text-black rounded-md w-28">
          {props.subtitle}
        </div>
        <div className="md:my-5 my-3 text-right text-lg md:text-2xl text-c3">
          {props.desc}
        </div>
        <div className="flex flex-row justify-end gap-3 mt-4 md:justify-end md:gap-5">
          <div className={props.showurl}>
            <a
              hidden="true"
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className="bg-c1 text-white flex justify-around flex-row shadow-sm shadow-black  hover:shadow-inner hover:shadow-black p-2 w-20 mb-8 text-center rounded-md"
            >
              View
              <AiFillEye className="self-center"></AiFillEye>
            </a>
          </div>
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="bg-white flex justify-around flex-row text-slate-900 shadow-sm shadow-black  hover:shadow-inner hover:shadow-black p-2 w-20 mb-8 text-center rounded-md"
          >
            Github
            <AiFillGithub className="self-center"></AiFillGithub>
          </a>
        </div>
      </div>
    </div>
  );
}
