
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



const ResidentsName = () => {

    const [ resident, setResident ] = useState([])
    const { index } = useParams()
    useEffect(() => {

        fetch(`https://swapi.dev/api/planets/${index}`)
        .then((res) => res.json())
        .then((data) => {


            data.residents.map((item, index) =>(
                fetch(item)
                .then((x) => x.json())
                .then((y) => {
                    console.log(y)
                    setResident(y.name)
                })
                
            ))
        })
    }, []);
        
console.log(resident);
    return(
        <div>
            {resident.map((item, index) => (
                <MDBTableBody key={index}>
                    <tr>
                        <td>
                            <Link to={''} 
                            key={index}>
                                <h1>{item}</h1> Click to see the planet
                            </Link>
                        </td>
                    </tr>
                </MDBTableBody>

        ))}
            
            <h1>{resident}</h1>
        </div>
    )
}








export default ResidentsName;