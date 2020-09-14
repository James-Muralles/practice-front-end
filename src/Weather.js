import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = (props) => {

    const [weather, setWeather] = useState("Not yet gotten");

   
    
let info = 0;
console.log(info)

useEffect(() => {
       axios.get('/weather').then((res) => {
            // setWeather(res.data.temp_c)
            console.log(res.data.temp_c)
    info = res.data.temp_c;
            
        })
});



    return (
        <div>
        <button onClick={(e) =>  setWeather(info)}>Get Weather</button>
      <h1>The weather in San Antonio is: {weather} </h1> 
        </div>
    );
  
}
export default Weather;
