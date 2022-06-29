import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import {MDBTable, MDBTableBody, MDBRow, MDBCol, MDBContainer} from "mdb-react-ui-kit"

function PlanetName() {

    const [item, setItem] = useState([]);
    const { index } = useParams()

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${index}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setItem(data.name)
        }).catch(console.error)
    }, []);
    

    return (
        <MDBContainer>
            <div style={{marginTop: "50px"}}>
                <MDBRow>
                    <MDBCol size="24">
                        <MDBTable>
                            <MDBTableBody>
        
                                <tr>
                                    <td>
                                        <Link to={`/planetName/${index+1}`} 
                                                    key={index}>
                                                    <h1>{item}</h1> Click to see the residents of the planets
                                        </Link>
                                    </td>

                                </tr>

                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>
    )
}


export default PlanetName;