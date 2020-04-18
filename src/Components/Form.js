import React from "react";

 const Form = props =>{
   console.log("this is form")
   return(
    <form 
    onSubmit= {
      props.gatWeather
      // props.componentDidMount1
    }
    >
    <input type = "text" name = "city"  placeholder="city...."/>
    <input type = "text" name = "country" placeholder="country...."/>
    <button>Get Weather</button>
    </form>)
 }
export default Form;