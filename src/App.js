import Planets from "./components/planetsPage/Planets.js";
import { Routes, Route } from "react-router-dom";
import PlanetName from "./components/planetDetailsPage/PlanetName";
import ResidentsName from "./components/residentsPage/ResidentsName.js";
import ResidentDetails from "./components/ResidentDetails/ResidentDetails";
import "./styles/index.scss";
import Header from "./components/Header/Header";
import Residents from "./components/ResidentList/Residents.js";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.hdqwalls.com/download/the-mandalorian-4k-2019-tv-show-ft-1242x2688.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "200vh",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" exact element={<Planets />} />
        <Route path="/planetName/:id" element={<PlanetName />} />
        <Route
          path="/planetName/residentsName/:id"
          element={<ResidentsName />}
        />
        <Route path="/residents" element={<Residents />} />
        <Route
          path="/planetName/residentsName/residentDetails/:id"
          element={<ResidentDetails />}
        />
      </Routes>
    </div>
  );
}
export default App;
