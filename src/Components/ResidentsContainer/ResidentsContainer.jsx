import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

// Styles
import "./ResidentsContainer.styles.css";

// Components
import ResidentInfo from "../ResidentInfo/ResidentInfo.jsx";

const ResidentsContainer = ({ residents, newResidents }) => {
  // Hooks
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(newResidents);
  }, [newResidents]);

  // Functions
  const key = (param) => {
    const id = param.lastIndexOf("/") + 1;
    const cut = param.slice(id);
    return cut;
  };

  const handdleNextPage = (e) => {
    e.preventDefault();

    if (data?.info?.prev === null) {
      axios
        .get(`${newResidents?.info?.next}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }

    if (data?.info?.next === null) {
      swal("This is the last page");
    }

    if (data?.info?.next !== null) {
      axios
        .get(`${data?.info?.next}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  };

  const handdlePrevPage = (e) => {
    e.preventDefault();

    if (data?.info?.prev === null) {
      swal("This is the first page");
    }

    if (data?.info?.next !== null || data?.info?.next === null) {
      axios
        .get(`${data?.info?.prev}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  };

  const filteredKey = (params) => params.id;

  return (
    <div className="residents-title">
      <h4>Residents</h4>
      <div className="residents-list">
        {residents?.length > 0
          ? residents?.map((resident) => (
              <ResidentInfo resident={resident} key={key(resident)} />
            ))
          : data?.results?.map((newResident) => (
              <ResidentInfo
                newResident={newResident}
                key={filteredKey(newResident)}
              />
            ))}
        {residents?.length === undefined && (
          <div className="container-pagination">
            <button
              className="button-pagination"
              onClick={(e) => handdlePrevPage(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
            </button>
            <button
              className="button-pagination"
              onClick={(e) => handdleNextPage(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResidentsContainer;
