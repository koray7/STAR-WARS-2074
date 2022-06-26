// import { Link } from 'react-router-dom';
// import { useState } from "react";
// import { useCallback } from 'react'
// import React, { useEffect } from 'react'
import React, { useState, useEffect } from "react"
import axios from "axios"
import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtn, MDBBtnGroup} from "mdb-react-ui-kit"
import "../planetsPage/Planets.css"

function Planets() {

    const [ data, setData ] = useState([]);
    const [ value, setValue ] = useState([]);

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

    const handleSearch = () => {};
    const handleReset = () => {};


    return (
        <MDBContainer>
        <form style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
        }}
        className="d-flex input-group w-auto"
        onSubmit={handleSearch}
        >

        <input 
            type="text"
            className="form-control"
            placeholder="Search Name of the planet..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        {/* <MDBBtnGroup> */}
            <MDBBtn type="submit" color="dark">Search</MDBBtn>
            <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>Reset</MDBBtn>
        {/* </MDBBtnGroup> */}

        </form>
            <div style={{marginTop: "100px"}}>
                <h2 className="text-center">Search Pagination using JSON API</h2>
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
















