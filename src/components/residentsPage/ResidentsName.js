// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { Link } from "react-router-dom";
import Axios from "axios";


function App() {
const ResidentsName = () => {

    Axios.get("https://swapi.dev/api/planets")
    .then((res) => {
        console.log(res);
    }
    );
};

    return(
        <div>
            <h1>People</h1>
            <button onClick={ResidentsName}>Get Joke Right Now!</button>
        </div>
    )
}








export default App;