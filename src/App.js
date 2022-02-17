// import {useState} from "react";
import axios from "axios";

function App() {
  const getWeather = () => {
    const city = document.getElementById("city");
    const results = document.querySelector(".results");
    const container = document.querySelector(".container");
    const back = document.querySelector(".back");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=07e671969be55a2fa3306de2f62c64de`
      )
      .then((response) => {
        if(response.data !== null){
        const resultData = `
        <div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>Location : </p>
            <p>${response.data.name},${response.data.sys.country}</p>
          </div>
          <div>
            <i class="fa-solid fa-temperature-full"></i>
            <p>Temperature : </p>
            <p>${Math.floor(response.data.main.temp - 273)} °C</p>
          </div>
          <div>
            <i class="fa-solid fa-droplet"></i>
            <p>Humidity : </p>
            <p>${response.data.main.humidity} %</p>
          </div>
          <div>
            <i class="fa-solid fa-sun"></i>
            <p>Sun Rise : </p>
            <p>${response.data.sys.sunrise}</p>
          </div>
          <div>
            <i class="fa-solid fa-sun"></i>
            <p>Sun Set : </p>
            <p>${response.data.sys.sunset}</p>
          </div>
                <div>
            <i class="fa-solid fa-bars"></i>
            <p>Condition : </p>
            <p>${response.data.weather[0].main}</p>
          </div>
                <div>
            <i class="fa-solid fa-cloud"></i>
            <p>Clouds : </p>
            <p>${response.data.weather[0].main}</p>
          </div>
        </div>
        `;
        results.innerHTML = resultData;
        city.value = "";

        container.style.height = "0";

          back.addEventListener("click",()=>{
            container.style.height = "90vh";
          })
        }else{
          alert('response is not valid')
        }
      }).catch((err)=>{
        alert("not valid input")
      });
  };



  return (
    <div className="App">
      <h2>weather application</h2>
      <div className="containers">
        <div className="container">
          <div className="fields">
            <input type="text" name="city" id="city" placeholder="City" />
            <button className="btn" onClick={getWeather}>
              get weather
            </button>
          </div>
        </div>
        <div className="container-1">
          <div className="back"><i class="fa fa-arrow-left"></i></div>          
          <div className="results"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
