import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Planets() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    return await axios
      .get("https://swapi.dev/api/planets/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  console.log("data", data);

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`https://swapi.dev/api/planets/?search=${value}`)
      .then((res) => {
        setData(res.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };
  const handleReset = () => {
    loadUsersData();
  };

  return (
    <MDBContainer>
      <br />
      <h2 className="text-center">Search for a planet</h2>
      <form
        style={{
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
          placeholder="Name of the planet..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <MDBBtn type="submit" color="dark">
          Search
        </MDBBtn>
        <MDBBtn className="mx-2" color="info" onClick={() => handleReset()}>
          Reset
        </MDBBtn>
      </form>
      <div style={{ marginTop: "100px" }}>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead dark>
                <tr>
                  <th className="text-center" scope="col">
                    NAME OF THE PLANETS
                  </th>
                </tr>
              </MDBTableHead>
              {data.length === 0 ? (
                <MDBTableBody className="align-center-mb-0">
                  <tr>
                    <td colSpan={8} className="text-center mb-0">
                      No Data found
                    </td>
                  </tr>
                </MDBTableBody>
              ) : (
                data.results.map((item, index) => (
                  <MDBTableBody key={index}>
                    <tr>
                      <td>
                        <Link to={`/planetName/${index + 1}`} key={index}>
                          <h1>{item.name}</h1> Click to see the planet
                        </Link>
                      </td>
                    </tr>
                  </MDBTableBody>
                ))
              )}
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default Planets;
