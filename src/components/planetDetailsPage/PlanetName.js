import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  MDBTable,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

function PlanetName() {
  const [residentPopulatedData, setResidentPopulatedData] = useState([]);
  const [planet, setPlanet] = useState("");
  const [residents, setResidents] = useState([]);
  const { id } = useParams();

  const populateResidents = useCallback(async () => {
    const getResident = async (id) => {
      const res = await fetch(`https://swapi.dev/api/people/${id}`);
      const data = await res.json();
      return data;
    };
    const residentsId = residents.map((resident) =>
      resident.slice(0, -1).split("/").pop()
    );

    setResidentPopulatedData(
      await Promise.all(residentsId.map(async (id) => await getResident(id)))
    );
  }, [residents]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlanet(data.name);
        setResidents(data.residents);
      })
      .catch(console.error);
    // Scroll restoration
    window.scrollTo(0, 0);
  }, [id]);
  console.log(residentPopulatedData);

  useEffect(() => {
    if (residents) {
      populateResidents();
    }
  }, [residents, populateResidents]);

  return (
    <MDBContainer>
      <div>
        <MDBRow>
          <MDBCol size="24">
            <MDBTable style={{ marginTop: "180px" }}>
              <MDBTableBody
                style={{
                  marginTop: "100px",
                  color: "dodgerBlue",
                  fontWeight: "900",
                }}
              >
                {residentPopulatedData?.length === 0 && (
                  <tr>
                    <td>No Residents in this planet</td>
                  </tr>
                )}
                <h2>
                  Planet name:{" "}
                  <span
                    style={{
                      marginTop: "100px",
                      color: "dodgerBlue",
                      fontWeight: "900",
                    }}
                  >
                    ~ {planet} ~
                  </span>
                </h2>
                <br />
                <h3>Residents</h3>
                {residentPopulatedData?.map((resident) => {
                  return (
                    <tr key={resident.name}>
                      <td>
                        <Link
                          to={`/planetName/residentsName/${resident.url
                            .slice(0, -1)
                            .split("/")
                            .pop()}`}
                          key={resident.url}
                        >
                          {resident.name}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}

export default PlanetName;
