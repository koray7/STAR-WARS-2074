import Planets from "./components/planetsPage/Planets.js";
import { Routes, Route } from "react-router-dom";
import PlanetDetails from "./components/planetDetailsPage/PlanetDetails"
import ResidentsName from "./components/residentsPage/ResidentsName.js";



function App() {
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Planets />} />
        <Route path="/planets" element={<PlanetDetails />} />
        <Route path="/planets/residents/:orbital_period" element={<ResidentsName />} />
      </Routes>
    </div>
  );
}
export default App;