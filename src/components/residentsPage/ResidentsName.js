
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { axios } from 'axios';
import { MDBTable, MDBTableBody, MDBRow, MDBCol, MDBContainer} from "mdb-react-ui-kit"



const ResidentsName = () => {

    const [ resident, setResident ] = useState([])
    const { index } = useParams()

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

    await fetch(`https://swapi.dev/api/planets/${index}`)
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
})};

    // console.log(resident);
    return(
    <MDBContainer>
            <div style={{marginTop: "50px"}}>
                <MDBRow>
                    <MDBCol size="24">
                        <MDBTable>
                            <MDBTableBody>

                                <tr>
                                    <td>
                                        <Link to={""} key={""}>
                                        <h3>Residents of the planet</h3>
                                        {resident.map(user => (
                                            <div key={user}>
                                                {user.name}
                                            </div>
                                        ))}
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








export default ResidentsName;
