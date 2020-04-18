import React from "react";
//import WeakContainer from "./WeakContainer";
import "weather-icons/css/weather-icons.css";
const Weather = props =>{
console.log("this is weather method")
  return  <div> 
                {props.city && props.country && <h5>{props.city},{props.country}</h5>}
                {props.max_temp && props.min_temp && <h5>{props.max_temp}&deg;|{props.min_temp}&deg;</h5>}
                {props.temperature && <p><h1>{props.temperature}&deg;c</h1>
                <i className="wi wi-day-lightning">Rain</i></p>}
                {props.description && <p>{props.description}</p>}
                {props.error && <p>{props.error}</p>}

                
  </div> 
}
export default Weather;