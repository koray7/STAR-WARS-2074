import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBRow, MDBCol, MDBContainer} from "mdb-react-ui-kit"
import { useNavigate } from 'react-router-dom';


const ResidentDetails = () => {

    const [ residentDetails, setResidentDetails ] = useState([])
    const { index } = useParams()
    const navigate = useNavigate();

useEffect(() => {
    loadData();
}, []);

const loadData = async () => {

    await fetch(`https://swapi.dev/api/planets/${index}`)
    .then((res) => res.json())
    .then((data) => {

    data.residents.map((item) =>(
        fetch(item)
        .then((x) => x.json())
        .then((y) => {
            console.log(y)
            setResidentDetails(y)
        })
        
    ))
})};

    return(
    <MDBContainer>
            <div style={{marginTop: "50px"}}>
                <MDBRow>
                    <MDBCol size="24">
                        <MDBTable>
                            <MDBTableBody>

                                <tr>
                                    <td>

                                            <div key={index}>
                                                <h2>Resident Name: {residentDetails.name}</h2>
                                                <br />
                                                <br />
                                                <h3>Gender: {residentDetails.gender}</h3>
                                                <h3>Birth Year: {residentDetails.birth_year}</h3>
                                                <h3>Eye Color: {residentDetails.eye_color}</h3>
                                                <h3>Hair Color: {residentDetails.hair_color}</h3>
                                                <h3>Skin Color: {residentDetails.skin_color}</h3>
                                                <h3>Mass: {residentDetails.mass}</h3>
                                                <h3>Created: {residentDetails.created}</h3>
                                            </div>
                                            <button onClick={() => navigate(-3)}>Home Page</button>
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








export default ResidentDetails;
