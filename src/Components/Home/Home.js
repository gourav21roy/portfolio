import { Footer } from "../Shared/Footer/Footer";
import { Splash } from "./Splash/Splash";
import { TechStack } from "./TechStack/TechStack";
import { WorkStrategy } from "./WorkStrategy/WorkStrategy";

export function Home() {
  return (
    <div>
      <Splash />
      <WorkStrategy></WorkStrategy>
      <TechStack></TechStack>
      <Footer></Footer>
    </div>
  );
}
