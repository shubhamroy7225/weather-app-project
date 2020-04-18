import React from "react";
import Titles from "./Components/Title";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import WeakContainer from "./Components/WeakContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import "./App.css";
const API_KEY = "1cd7cacae4f033c9efb199a32b1f3a03";
class App extends React.Component {
  constructor(props){
  super(props)
  console.log("this is parrent constructor")
  this.state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    max_temp:undefined,
    min_temp:undefined,
    error: undefined,
  };
}
  

  gatWeather = async (e) => {
    console.log("this is getWeather method")
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    
    if (city && country) {
      console.log(data);
     
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        max_temp: data.main.temp_max,
        min_temp: data.main.temp_min,
        error: "",
      });
    } else {
      console.log('city')
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        max_temp:undefined,
        min_temp:undefined,
        error: "please enter the values",
      });
    }
  };
render() {
  console.log("this is render methods")
    return (
      <div>
        <div className="container">
          <div className = "header">
          <i className="wi wi-day-sunny"></i>
          <Titles />
          </div>
          <div>,
            <Form gatWeather = {this.gatWeather}/>
          </div>
          <div className = "weather">
          <Weather
               temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                max_temp = {this.state.max_temp}
                min_temp = {this.state.min_temp}
                error={this.state.error}
                />
               <WeakContainer city={this.state.city}/>   
            </div>  
        </div>
      </div>
    );
  }
}
export default App;
