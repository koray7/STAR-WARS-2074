import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


function ResidentsName() {

    const [resName, setResName] = useState({})
    const { planet_number } = useParams()

    useEffect(() => {
        fetch(`http://swap.dev/api/planets/${planet_number}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setResName(data.result.residents)
            }).catch(console.error)
    }, [])

    return(
        <div>
           {resName.map((res, idx) => {
                    return (
                        
                        <Link to={`planets/${res.orbital_period}`} 
                            key={res.orbital_period}>
                            <div key={idx}>
                                
                                <span className="planets-detail">
                                    {res.name}
                                </span>

                            </div>

                        </Link>
                    )
                })}
            
        </div>
    )
}

export default ResidentsName;