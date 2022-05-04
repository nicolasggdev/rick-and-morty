import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";

// Styles
import "./SearchBox.styles.css";

const SearchBox = ({ filterResident }) => {
  // Hooks
  const [filterType, setFilterType] = useState("name");
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  // Functions
  const getData = (e) => {
    e.preventDefault();
    if (!filter) {
      swal("Enter a valid data");
    } else {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/?${filterType}=${filter}`
        )
        .then((res) => setData(res.data))
        .catch((err) => {
          console.log(err);
          swal("Enter a valid data");
        });
    }
  };

  useEffect(() => {
    filterResident(data, filter, filterType);
  }, [filterResident, data, filter, filterType]);

  const search = () => {
    if (filterType === "name") {
      return (
        <input
          type="text"
          placeholder="Name of character"
          onChange={(e) => setFilter(e.target.value)}
        />
      );
    } else if (filterType === "status") {
      return (
        <select onChange={(e) => setFilter(e.target.value)}>
          <option>Select Option</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      );
    } else if (filterType === "species") {
      return (
        <input
          type="text"
          placeholder="Name of species"
          onChange={(e) => setFilter(e.target.value)}
        />
      );
    } else if (filterType === "gender") {
      return (
        <select onChange={(e) => setFilter(e.target.value)}>
          <option>Select Option</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      );
    }
  };

  return (
    <form className="container-filter">
      <div className="filter">
        <span>Filter by </span>
        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="name">Name</option>
          <option value="status">Status</option>
          <option value="species">Species</option>
          <option value="gender">Gender</option>
        </select>
      </div>
      <div className="filter">
        {search()}
        <button onClick={(e) => getData(e)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="svg-inline--fa fa-search fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
