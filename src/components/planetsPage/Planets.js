// import { Link } from 'react-router-dom';
// import { useState } from "react";
// import { useCallback } from 'react'
// import React, { useEffect } from 'react'
import React, { useState, useEffect } from "react"
import axios from "axios"
import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer} from "mdb-react-ui-kit"
import "../planetsPage/Planets.css"

function Planets() {

    const [ data, setData ] = useState([]);

    useEffect(() =>{
        loadUsersData();
    }, []);

    const loadUsersData = async () => {
        return await axios
        .get("https://swapi.dev/api/planets/")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));

    };

    console.log("data", data);
    return (
        <MDBContainer>
            <div style={{marginTop: "100px"}}>
                <h2>Search Pagination using JSON API</h2>
                <MDBRow>
                    <MDBCol size="12">
                        <MDBTable>
                            <MDBTableHead dark>
                                <tr>
                                    <th scope="col">Name.</th>
                                </tr>
                            </MDBTableHead>
                            {data.length === 0 ? (
                                <MDBTableBody className="align-center-mb-0">
                                    <tr>
                                        <td colSpan={8} className="text-center mb-0">
                                        No Data found</td>
                                    </tr>
                                </MDBTableBody>
                            ): (
                                data.results.map((item, index) => (
                                    <MDBTableBody key={index}>
                                        <tr>
                                            <td>{item.name}</td>
                                        </tr>
                                    </MDBTableBody>
                                ))
                            )}
                        </MDBTable>
                    </MDBCol>
                </MDBRow>
            </div>
        </MDBContainer>
    )
}


export default Planets;
















