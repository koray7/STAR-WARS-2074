import Planets from "./components/planetsPage/Planets.js";
import { Routes, Route } from "react-router-dom";
import PlanetName from "./components/planetDetailsPage/PlanetName"
import ResidentsName from "./components/residentsPage/ResidentsName.js";
import ResidentDetails from "./components/ResidentDetails/ResidentDetails"


function App() {
  
  
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Planets />} />
        <Route path="/planetName/:index" element={<PlanetName />} />
        <Route path="/planetName/residentsName/:index" element={<ResidentsName />} />
        <Route path="/planetName/residentsName/residentDetails/:index" element={<ResidentDetails />} />
      </Routes>
    </div>
  );
}
export default App;