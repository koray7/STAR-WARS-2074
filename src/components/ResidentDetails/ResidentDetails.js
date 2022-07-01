import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MDBTable,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import styles from "../Header/Header.module.scss";

const ResidentDetails = () => {
  const [residentDetails, setResidentDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const loadData = useCallback(async () => {
    await fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setResidentDetails(data);
      });
  }, [id]);
  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [loadData]);

  return (
    <MDBContainer>
      <div>
        <MDBRow>
          <MDBCol size="24">
            <MDBTable>
              <MDBTableBody>
                <tr>
                  <td>
                    <div
                      style={{
                        marginTop: "100px",
                        color: "blue",
                        fontWeight: "900",
                      }}
                      key={id}
                    >
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
                    <br />
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <button
                        className={styles.button}
                        onClick={() => navigate("/")}
                      >
                        Home Page
                      </button>
                    </div>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
};

export default ResidentDetails;
