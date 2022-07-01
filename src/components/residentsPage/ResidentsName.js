import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { axios } from 'axios';
import {
  MDBTable,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

const ResidentsName = () => {
  const [resident, setResident] = useState([]);
  const { id } = useParams();

  const loadData = useCallback(async () => {
    await fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setResident(data);
      });
  }, [id]);
  useEffect(() => {
    loadData();
    window.scrollTo(0, 0);
  }, [loadData]);

  // console.log(resident);
  return (
    <MDBContainer>
      <div>
        <MDBRow>
          <MDBCol size="24">
            <MDBTable>
              <MDBTableBody>
                <tr>
                  <td>
                    <Link
                      to={`/planetName/residentsName/residentDetails/${id}`}
                      key={id}
                    >
                      <h1>Residents of the planet</h1>
                      <br />
                      <br />
                      <br />

                      <div style={{ marginTop: "50px" }} key={""}>
                        <h2>Name: {resident.name}</h2>
                        <br />
                        <h5>Click to see details of the resident</h5>
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
  );
};

export default ResidentsName;
