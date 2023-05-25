import { useState } from "react";
import { DiJava } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiReact } from "react-icons/si";

export function TechStack() {
  const [type, setType] = useState(0);
  return (
    <div className="m-5 mt-16 md:m-16 text-c3">
      <span className="font-medium text-c2 text-lg">What I work with</span>
      <br></br>
      <span className="text-3xl text-c1 font-semibold">
        Technologies & Skills
      </span>
      <br></br>
      <div className="flex justify-center flex-row m-1 md:gap-5">
        <DiJava
          className="w-20 hover:text-blue-700 hover:bg-white rounded-md self-center p-2 h-20 "
          alt="Java"
          onMouseLeave={() => setType(0)}
          onMouseOver={() => setType("Java")}
        />
        <SiSpring
          className="w-16 self-center hover:bg-white hover:text-green-500 hover:rounded-md p-2 h-16"
          onMouseOver={() => setType("Spring")}
          onMouseLeave={() => setType(0)}
        />
        <SiSpringboot
          className="w-16 self-center  hover:bg-white hover:text-green-500 hover:rounded-md p-2 h-16"
          onMouseOver={() => setType("Spring Boot")}
          onMouseLeave={() => setType(0)}
        />
        <SiAngular
          className="w-16 self-center h-16 hover:bg-white hover:text-red-700 hover:rounded-md p-2 rounded-md"
          onMouseOver={() => setType("Angular")}
          onMouseLeave={() => setType(0)}
        />
        <SiDocker
          className="w-16 self-center h-16  hover:bg-white hover:text-blue-500 hover:rounded-md p-2"
          onMouseOver={() => setType("Docker")}
          onMouseLeave={() => setType(0)}
        />
        <SiKubernetes
          className="w-16 self-center h-16  hover:bg-white hover:text-blue-800 hover:rounded-md p-2"
          onMouseOver={() => setType("Kubernetes")}
          onMouseLeave={() => setType(0)}
        />
        <SiReact
          className="w-16 self-center h-16  hover:bg-black hover:text-sky-400 hover:rounded-md p-2"
          onMouseOver={() => setType("React")}
          onMouseLeave={() => setType(0)}
        />
        <span
          className="font-bold self-center h-16 w-16 text-2xl  hover:bg-white hover:rounded-md p-2"
          onMouseOver={() => setType("Google Cloud Platform")}
          onMouseLeave={() => setType(0)}
        >
          <span
            className="hover:bg-gradient-to-r h-16 align-middle hover:from-red-600 hover:via-yellow-500 hover:to-blue-700 hover:text-transparent
            hover:bg-clip-text"
          >
            GCP
          </span>
        </span>
      </div>
      <div className="text-center">
        {type !== 0 ? <div id="type">{type}</div> : <div id="type">&nbsp;</div>}
      </div>
    </div>
  );
}
