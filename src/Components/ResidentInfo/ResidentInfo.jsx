import axios from "axios";
import React, { useEffect, useState } from "react";

// Styles
import "./ResidentInfo.styles.css";

const ResidentInfo = ({ resident, newResident }) => {
  const [residenteInfo, setResidentInfo] = useState({});

  useEffect(() => {
    if (resident !== undefined) {
      axios
        .get(`${resident}`)
        .then((res) => setResidentInfo(res.data))
        .catch((err) => console.log(err));
    }
  }, [resident]);

  // Variables
  const { name, image, status, origin, episode } = residenteInfo;

  return (
    <div className="column">
      <div className="card">
        {resident !== undefined ? (
          <>
            <img src={image} alt={`${name}`} />
            <p>
              <b>Name: </b> {name}
            </p>
            <p>
              <b>Status: </b> {status}
            </p>
            <p>
              <b>Origin: </b> {origin?.name}
            </p>
            <p>
              <b>Episodes where appear: </b> {episode?.length}
            </p>
          </>
        ) : (
          <>
            <img src={newResident?.image} alt={`${newResident?.name}`} />
            <p>
              <b>Name: </b> {newResident?.name}
            </p>
            <p>
              <b>Status: </b> {newResident?.status}
            </p>
            <p>
              <b>Origin: </b> {newResident?.origin?.name}
            </p>
            <p>
              <b>Episodes where appear: </b> {newResident?.episode?.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ResidentInfo;
