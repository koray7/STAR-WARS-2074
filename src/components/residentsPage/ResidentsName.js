import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { Link } from "react-router-dom";
import Axios from "axios";


function App() {

const [resName, getResName] = useState("")

const ResidentsName = () => {

    Axios.get(`https://swapi.dev/api/planets/`)
    .then((res) => {
        console.log(res.data)
        getResName(res.climate)
    }).catch(err => {
        console.log(err)
    })
        
    
};

    return(
        <div>
            <h1>People</h1>
            <button onClick={ResidentsName}>Get the residents now!</button>
            
            { resName ? <h1>{resName}</h1> : null}


            {/* <Link to={`/planets/${planet.id}`}>{planet.name}</> */}
        </div>
    )
}








export default App;