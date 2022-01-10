import './App.css';

// Styles
import "./reset.styles.css"

// Components
import LocationInfo from "./Components/LocationInfo/LocationInfo.jsx";
import SearchBox from './Components/SearchBox/SearchBox';

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty Wiki</h1>
      <SearchBox/>
      <LocationInfo/>
    </div>
  );
}

export default App;
