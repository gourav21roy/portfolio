import { IoDownload } from "react-icons/io5";
import AboutImage from "../../Assets/Images/portfolio.jpg";
import { Link } from "react-router-dom";
import Resume from "../../Assets/Files/Gourav_Roy.pdf";
export function About() {
  return (
    <div className="flex flex-col-reverse justify-end md:m-16 m-5 md:flex-row">
      <div className="flex flex-col gap-3 md:gap-y-5">
        <div className="text-c4 font-semibold text-2xl">Who am I</div>
        <div className="text-c1 text-4xl font-semibold">About me</div>
        <div className="text-c2 text-lg md:text-xl font-semibold ">
          Hey! I am Gourav Roy, a seasoned Software Developer with 5 years of
          expertise in Java, Spring Boot, microservices and Angular with a pinch
          of Docker, Kubernetes and GCP.<br></br>
          Whether it's building robust backend systems with Java or creating
          seamless user experiences with Angular, I am comfortable working in
          both the areas.
        </div>
        <div className="flex  flex-row self-center my-5 md:self-start">
          <Link
            to={Resume}
            target="_blank"
            className="flex flex-row gap-2  shadow-sm text-white p-2 justify-center bg-c1 rounded-md shadow-black hover:shadow-inner hover:shadow-black "
          >
            Download Resume
            <IoDownload className="self-center text-white"></IoDownload>
          </Link>
        </div>
      </div>
      <div className="w-1/2 mx-auto self-center">
        <img
          className="md:rounded-s-lg rounded-full"
          src={AboutImage}
          alt="profile of Gourav Roy"
        ></img>
      </div>
    </div>
  );
}
