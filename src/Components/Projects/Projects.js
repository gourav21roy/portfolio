import { Project } from "./Project/Project";
import GamezoneMockup from "../../Assets/Images/gamezonemockup.png";
import PortfolioMockup from "../../Assets/Images/portfolioMockup.png";

export function Projects() {
  return (
    <div>
      <div className="flex md:mx-20 flex-col m-5">
        <div className="text-xl md:text-2xl text-c2">What I have worked on</div>
        <div className="text-3xl md:text-6xl text-c1 font-semibold">
          Projects
        </div>
        <Project
          title="Gamezone X"
          mockup={GamezoneMockup}
          subtitle="Side-Project"
          desc="A Gaming website with few classic tiles like Tic-Tac-Toe."
          url="https://game-zone-x.netlify.app"
          github="https://github.com/gourav21roy/gamezone"
        ></Project>
        <Project
          title="Portfolio"
          mockup={PortfolioMockup}
          subtitle="Side-Project"
          desc="This Portfolio that you are seeing."
          url="https://gouravroy.netlify.app"
          showurl="invisible"
          github="https://github.com/gourav21roy/portfolio"
        ></Project>
      </div>
    </div>
  );
}
