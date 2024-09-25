import { useState } from "react";

// CSS
import "./App.css";

import axios from "axios"; // first install axios in terminal with: npm i axios

// search field
import Search from "./components/Search/Search";

//  weather component data
import WeatherCard from "./components/Weather-app/WeatherCard";

function App() {
  const [data, setData] = useState({});
  const [Location, setLocation] = useState("");

  const url = `http://localhost:3000/products ${Location}`;

  const SearchLocation = (event) => {
    if (event.target === "Enter") {
      try {
        axios.get(url).then((res) => {
          setData(res);
        });
      } catch (err) {
        console.error(`${err} failed to fetch, Mr ola`);
      }
    }
    setLocation(" ");
  };

  return (
    <div className='weather'>
      <header className='header-navigation'>
        {/* header text logo */}
        <h1 className='logo-text'>Weather App</h1>

        {/* search field */}
        <Search values={(Location, setLocation, SearchLocation)} />
      </header>

      {/* weather data */}
      <WeatherCard data={data} />
    </div>
  );
}

export default App;
