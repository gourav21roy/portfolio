import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Shared/Footer/Footer";
import { Navbar } from "./Components/Shared/NavBar/Navbar";
import { PortfolioHeader } from "./Components/Shared/PortfolioHeader/PortfolioHeader";
import { Router } from "./Components/Shared/Router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col font-body w-screen bg-gradient-to-r from-grad1 to-grad2">
        <PortfolioHeader></PortfolioHeader>
        <Router></Router>
        <Footer></Footer>
        <Navbar></Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
