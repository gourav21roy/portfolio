import { Footer } from "../Shared/Footer/Footer";
import { Navbar } from "../Shared/NavBar/Navbar";
import { PortfolioHeader } from "../Shared/PortfolioHeader/PortfolioHeader";
import { Splash } from "./Splash/Splash";
import { TechStack } from "./TechStack/TechStack";
import { WorkStrategy } from "./WorkStrategy/WorkStrategy";

export function Home() {
  return (
    <div>
      <PortfolioHeader />
      <Splash />
      <WorkStrategy></WorkStrategy>
      <TechStack></TechStack>
      <Footer></Footer>
      <Navbar></Navbar>
    </div>
  );
}
