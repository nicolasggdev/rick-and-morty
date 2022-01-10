import './App.css';

// Styles
import "./reset.styles.css";

// Components
import LocationInfo from "./Components/LocationInfo/LocationInfo.jsx";
import SearchBox from './Components/SearchBox/SearchBox';

function App() {
  return (
    <div className="App">
      <img className='title' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt="Rick and Morty" />
      <SearchBox/>
      <LocationInfo/>
    </div>
  );
}

export default App;
