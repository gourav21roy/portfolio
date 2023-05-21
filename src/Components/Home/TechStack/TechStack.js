import {DiJava} from "react-icons/di";
import {SiSpring} from "react-icons/si";
import {SiSpringboot} from "react-icons/si";
import {SiAngular} from "react-icons/si";
import {SiDocker} from "react-icons/si";
import {SiKubernetes} from "react-icons/si";
import {SiReact} from "react-icons/si";

export function TechStack(){
    return (
        <div className="m-5 mt-16 md:m-16 text-c3">
            <span className="font-medium text-lg">What I work with</span><br></br>
            <span className="text-3xl font-semibold">Technologies & Skills</span><br></br>
            <div className="flex justify-center flex-row m-1 gap-5">
                <DiJava className="w-20 self-center  h-20" alt="Java"/>
                <SiSpring className="w-16 self-center h-16"/>
                <SiSpringboot className="w-16 self-center h-16"/>
                <SiAngular className="w-16 self-center h-16"/>
                <SiDocker className="w-16 self-center h-16"/>
                <SiKubernetes className="w-16 self-center h-16"/>
                <SiReact className="w-16 self-center h-16"/>
                <span className="font-bold self-center text-2xl md:text-3xl">GCP</span>
            </div>
        </div>
    )
}