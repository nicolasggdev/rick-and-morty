import { useState } from "react";

// Styles
import "./reset.styles.css";

// Components
import LocationInfo from "./Components/LocationInfo/LocationInfo.jsx";
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
  // Hook
  const [newResidents, setNewResidents] = useState({});
  const [newFilter, setNewFilter] = useState("");
  const [newFilterType, setNewFilterType] = useState("");

  const filterResident = (residents, filter, filterType) => {
    setNewResidents(residents);
    setNewFilter(filter);
    setNewFilterType(filterType);
  };

  return (
    <div className="App">
      <img
        className="title"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
        alt="Rick and Morty"
        onClick={() => window.location.reload(false)}
      />
      <SearchBox filterResident={filterResident} />
      <LocationInfo
        newResidents={newResidents}
        newFilter={newFilter}
        newFilterType={newFilterType}
      />
    </div>
  );
}

export default App;
