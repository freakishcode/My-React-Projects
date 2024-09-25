/* eslint-disable react/prop-types */
// CSS
import "./WeatherCard.css";

function WeatherCard({ data }) {
  return (
    <>
      <div className='weather-app'>
        {/* TOP PART */}
        <div className='top'>
          <div className='location'>
            {/* place */}
            <p>Dallas {data.name}</p>
          </div>

          {/* temperature */}
          <div className='temp'>
            <h1>65.F {data.temperature}</h1>
          </div>

          {/* weather condition */}
          <div className='description'>
            <p>Clouds {data.description}</p>
          </div>
        </div>

        {/* BOTTOM PART */}
        <div className='bottom'>
          {/* Feels like */}
          <div className='feel'>
            <p>65 .F {data.feel}</p>
            <p>Feels like</p>
          </div>

          {/* Humidity */}
          <div className='humidity'>
            <p>20% {data.humidity}</p>
            <p>Humidity</p>
          </div>

          {/* Wind */}
          <div className='wind'>
            <p className='wind-NPM'>3 MPM {data.wind}</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
