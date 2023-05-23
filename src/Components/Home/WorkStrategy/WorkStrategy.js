import { GiArchiveResearch } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { HiOutlineCode } from "react-icons/hi";
import { HiShieldCheck } from "react-icons/hi";

export function WorkStrategy() {
  return (
    <div id="work" className="work text-c3 m-5 mt-10 md:m-16 text-lg">
      <div>
        <span className="text-left text-c2 font-medium">How do I work</span>
        <br></br>
        <span className="text-left text-c1 text-3xl font-semibold">
          Development Process
        </span>
      </div>
      <div className="md:columns-2 columns-1">
        <div className="flex flex-col strategy1 md:p-5">
          <div className="flex mt-5">
            <GiArchiveResearch className="self-center shadow-md shadow-slate-800 bg-black bg-opacity-50 p-1 rounded-md w-11 h-11" />
            <span className="self-center ml-2 text-xl">
              Research & Strategy
            </span>
          </div>

          <div className="font-sans text-c2 text-sm mt-2 md:text-lg">
            Ask First. Before jumping into developing I always make sure what
            needs to be done and what I have to learn to hit the ground running.
            Then comes the process of breaking down work into atomic tasks and
            making sure the order and estimates of the tasks are perfect.
          </div>
        </div>

        {/* Strategy 2 */}

        <div className="flex flex-col strategy2 md:p-5">
          <div className="flex mt-5">
            <HiLightBulb className="self-center shadow-md shadow-slate-800 bg-black bg-opacity-50 p-1 rounded-md w-11 h-11" />
            <span className="self-center ml-2 text-xl">
              Brainstorming & Design
            </span>
          </div>

          <div className="font-sans text-c2 text-sm mt-2 md:text-lg">
            Problem Solving. In this step I take up each atomic task and find
            the best approach to tackle the problem and discuss multiple ideas
            with team members and create a rough design for both front-end and
            back-en
          </div>
        </div>

        <div className="flex flex-col strategy3 md:p-5">
          <div className="flex mt-5">
            <HiOutlineCode className="self-center shadow-md shadow-slate-800 bg-black bg-opacity-50 p-1 rounded-md w-11 h-11" />
            <span className="self-center ml-2 text-xl">Development</span>
          </div>

          <div className="font-sans text-c2 text-sm mt-2 md:text-lg">
            Bringing Ideas to life. This step is all about executing the atomic
            tasks laid out in the previous steps.
          </div>
        </div>

        <div className="flex flex-col strategy4 md:p-5">
          <div className="flex mt-5">
            <HiShieldCheck className="self-center shadow-md shadow-slate-800 bg-black bg-opacity-50 p-1 rounded-md w-11 h-11" />
            <span className="self-center ml-2 text-xl">Quality Assurance</span>
          </div>

          <div className="font-sans text-c2 text-sm mt-2 md:text-lg">
            Testing. This step involves unit as well as integration testing of
            the feature. Still working on learning to write automated testcases.
          </div>
        </div>
      </div>
    </div>
  );
}
