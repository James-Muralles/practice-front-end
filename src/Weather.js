import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Weather = (props) => {

    const [weather, setweather] = useState("Not yet gotten");

    useEffect(() => {
        axios.get('/weather').then((res) => {
            console.log(res.data.temp_c);
        })
    });

    return (
        <div>
        <button>Get Weather</button>
      <h1>The weather in San Antonio is: {weather} </h1> 
        </div>
    );
  
}
export default Weather;
