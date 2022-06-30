
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
            setResident(y)
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
                                        <h1>Residents of the planet</h1>
                                        <br />
                                        <br />
                                        {/* {resident.map(user => ( */}
                                            <div key={""}>
                                                <h2>Name: {resident.name}</h2>
                                                <h3>Skin Color: {resident.skin_color}</h3>
                                                <h3>Gender: {resident.gender}</h3>
                                            </div>
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


// useEffect(() => {
//     loadData();
// }, []);

// const loadData = async () => {

//     await fetch(`https://swapi.dev/api/planets/${index}`)
//     .then((res) => res.json())
//     .then((data) => {

//     data.residents.map((item, index) =>(
//         fetch(item)
//         .then((x) => x.json())
//         .then((y) => {
//             console.log(y)
//             setResident(y.name)
//         })
        
//     ))
// })};