import Planets from "./components/planetsPage/Planets.js";
import { Routes, Route } from "react-router-dom";
import PlanetDetails from "./components/planetDetailsPage/PlanetDetails"

function App() {
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Planets />} />
        <Route path="/planets" element={<PlanetDetails />} />
      </Routes>
    </div>
  );
}
export default App;