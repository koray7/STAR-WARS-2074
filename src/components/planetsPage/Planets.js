import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Planets() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const loadUsersData = useCallback(async () => {
    setIsLoading(true);
    setError(false);
    await axios
      .get("https://swapi.dev/api/planets/?page=" + currentPage)
      .then((res) => {
        setIsLoading(false);
        setSuccess(true);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);
  console.log(data);

  useEffect(() => {
    loadUsersData();
  }, [currentPage, loadUsersData]);

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
        <MDBTable responsive>
          <MDBTableHead dark className="d-flex justify-content-between p-3">
            <th
              onClick={() => setCurrentPage(currentPage - 1)}
              className={currentPage === 1 ? "disabled" : "affordance"}
            >
              {`< Prev`}
            </th>
            <th>NAME OF THE PLANETS</th>
            <th
              onClick={() => setCurrentPage(currentPage + 1)}
              className={currentPage === 6 ? "disabled" : "affordance"}
            >
              {`Next >`}
            </th>
          </MDBTableHead>
          {isLoading && (
            <MDBTableBody>
              <th scope="col">
                <td className="loading">Loading...</td>
              </th>
            </MDBTableBody>
          )}
          {error.message && (
            <MDBTableBody>
              <th scope="col">
                <td>Error: {error.message}</td>
              </th>
            </MDBTableBody>
          )}
          {success &&
            data.results.map((item) => {
              const id = item.url.slice(0, -1).split("/").pop();

              return (
                <MDBTableBody
                  key={id}
                  style={{
                    marginTop: "100px",
                    color: "dodgerBlue",
                    fontWeight: "900",
                  }}
                >
                  <tr>
                    <td>
                      <Link
                        to={`/planetName/${id}`}
                        state={{ residents: item.residents }}
                      >
                        <h1>{item.name}</h1> Click to see the planet
                      </Link>
                    </td>
                  </tr>
                </MDBTableBody>
              );
            })}
        </MDBTable>
      </div>
    </MDBContainer>
  );
}

export default Planets;
