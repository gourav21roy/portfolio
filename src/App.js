import "./App.css";
import { Home } from "./Components/Home/Home";
import { PortfolioHeader } from "./Components/Shared/PortfolioHeader/PortfolioHeader";

function App() {
  return (
    <div className="flex flex-col font-body w-screen bg-gradient-to-r from-bgc to-c2">
      <PortfolioHeader/>
      <Home/>
      {/* <Maintenance/> */}
    </div>
  );
}

export default App;
