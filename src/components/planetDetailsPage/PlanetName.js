// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";
import { useParams } from 'react-router-dom';


function PlanetName() {

    const [item, setItem] = useState([]);
    const { index } = useParams()

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${index}`)
        .then((res) => res.json())
        // .then((res) => console.log(res.json()))
        .then((data) => {
            console.log(data)
            setItem(data.name)
        }).catch(console.error)
    }, []);



    // const fetchItem = async () => {
    //     return await axios
    //     .get("https://swapi.dev/api/planets/")
    //     .then((res) => setItem(res.data))
    //     .catch((err) => console.log(err));
    // };
    

    return (
        <div className="planets-list">
            <section>
                <h1>{item}</h1>
            </section>

        </div>
    )
}


export default PlanetName;