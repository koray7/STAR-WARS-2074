import { useEffect } from "react";
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
  const { index } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch(`https://swapi.dev/api/planets/${index}`)
      .then((res) => res.json())
      .then((data) => {
        data.residents.map((item) =>
          fetch(item)
            .then((x) => x.json())
            .then((y) => {
              console.log(y);
              setResident(y);
            })
        );
      });
  };

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
                      to={`/planetName/residentsName/residentDetails/${index}`}
                      key={index}
                    >
                      <h1>Residents of the planet</h1>
                      <br />
                      <br />
                      <br />
                      {/* {resident.map(user => ( */}
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
