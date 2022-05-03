import axios from "axios";
import React, { useEffect, useState } from "react";

// Styles
import "./LocationInfo.styles.css";

// Componentes
import ResidentsContainer from "../ResidentsContainer/ResidentsContainer.jsx";
import Loader from "../Loader/Loader";

const LocationInfo = ({ newResidents, newFilter, newFilterType }) => {
  // Hooks
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomNumber()}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // Variables
  const { name, type, dimension, residents } = data;

  // Functions
  const randomNumber = () => Math.floor(Math.random() * 126 + 1);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : newResidents.length === 0 ? (
        <>
          <div className="location-data">
            <h2> {name} </h2>
            <div>
              <p>
                <b>Type: </b> {type}
              </p>
              <p>
                <b>Dimension: </b> {dimension}
              </p>
              <p>
                <b>Population: </b> {residents?.length}
              </p>
            </div>
          </div>
          {residents?.length !== 0 ? (
            <ResidentsContainer residents={residents} />
          ) : (
            <p className="population-alert">There aren't population here</p>
          )}
        </>
      ) : (
        <>
          <div className="location-data">
            <h2> You are filtering!! </h2>
            <div>
              <p>
                <b>Filter By: </b> {newFilterType}
              </p>
              <p>
                <b>Data: </b> {newFilter}
              </p>
            </div>
          </div>
          <ResidentsContainer newResidents={newResidents} />
        </>
      )}
    </div>
  );
};

export default LocationInfo;
