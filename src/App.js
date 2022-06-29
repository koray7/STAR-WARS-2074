import Planets from "./components/planetsPage/Planets.js";
import { Routes, Route } from "react-router-dom";
import PlanetName from "./components/planetDetailsPage/PlanetName"
import ResidentsName from "./components/residentsPage/ResidentsName.js";



function App() {
  
  
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Planets />} />
        <Route path="/planetName/:index" element={<PlanetName />} />
        <Route path="/planetName/residentsName/:index" element={<ResidentsName />} />
      </Routes>
    </div>
  );
}
export default App;