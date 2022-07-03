import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MDBTable,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

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
  console.log(residentDetails);

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
                        marginTop: "150px",
                        color: "dodgerBlue",
                        fontWeight: "900",
                      }}
                      key={id}
                    >
                      <h2>
                        Resident Name: <h1>{residentDetails.name}</h1>
                      </h2>
                      <br />
                      <br />
                      <h4>Gender: {residentDetails.gender}</h4>
                      <h4>Birth Year: {residentDetails.birth_year}</h4>
                      <h4>Eye Color: {residentDetails.eye_color}</h4>
                      <h4>Hair Color: {residentDetails.hair_color}</h4>
                      <h4>Skin Color: {residentDetails.skin_color}</h4>
                      <h4>Mass: {residentDetails.mass}</h4>
                      <h4>Created: {residentDetails.created}</h4>
                    </div>
                    <br />
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <MDBBtn
                        rounded
                        size="lg"
                        className="d-grid gap-2 col-4 mx-auto"
                        color="info"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </MDBBtn>
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
