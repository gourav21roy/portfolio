import { Route, Routes } from "react-router-dom";
import { Home } from "../../Home/Home";
import { Projects } from "../../Projects/Projects";
import { About } from "../../About/About";

export function Router() {
  return (
    <Routes>
      <Route exact path="*" element={<Home />}></Route>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}
