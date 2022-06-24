import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



function PlanetDetails() {

    const [planets, setPlanets] = useState([])
    let url = "https://swapi.dev/api/planets"

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPlanets(data.results)
            }).catch(err => console.error(err))
    }, [])

    return (
        <div className="planets-list">
            <section>
                {planets.map((planet, idx) => {
                    return (
                        
                        <Link to={`planets/${planet.idx}`} key={planet.idx}>
                            <div key={idx}>
                                <span className="planets-detail">{planet.name}
                                </span>

                            </div>

                        </Link>
                    )
                })}
            </section>

        </div>
    )
}


export default PlanetDetails;