import { Link } from 'react-router-dom'



function Planets() {
    return (
        <div>
            <h1>
                <a className="planets-page" href="/">All the planets are here!!
                </a>
            </h1>
            <h2>
                <Link to="/planets" className="planets-link">Click to see ~~PLANETS~~</Link>
            </h2>
        </div>
    )
}


export default Planets;