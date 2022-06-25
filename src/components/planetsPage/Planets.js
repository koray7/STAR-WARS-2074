import { Link } from 'react-router-dom';
import { useState } from "react";
import { useCallback } from 'react'

function Planets() {

    const [search, setSearch] = useState([]);

    const oneTimeCall = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if(timer) clearTimeout(timer);
            timer = setTimeout( () => {
                timer = null
                func.apply(context, args);
            }, 500);
        }
    }

    const handleChange = (event) => {
        const {value} = event.target;
        fetch(`https://swapi.dev/api/planets/${value}`)
        .then(res => res.json())
        .then(json => setSearch(json.data));
    }

    const optimizeVersion = useCallback(oneTimeCall(handleChange), [])

    return (
        <div>
            <h1>
                <a className="planets-page" href="/">All the planets are here!!
                </a>
            </h1>
            <h2>
                <Link to="/planets" className="planets-link">Click to see PLANETS !!</Link>
            </h2>
            <br />
            <h1>Look For a Planet</h1>

            <input type="text" name={"search"} placeholder="Search for planet" className="search" onChange={optimizeVersion} />
            {search?.map((el, i) => 

                <div key={i} className={'autocomplete'}>
                    <span>{el.name}</span>
                </div>
            )}

            <button>Submit</button>

        </div>
    )
}


export default Planets;