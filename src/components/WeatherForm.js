import React from 'react';

const WeatherForm = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Enter city" />
        <input className="input-city" type="text" name="country" placeholder="Enter country" />
        <button className="btn-1">Get Weather</button>
    </form>
);

export default WeatherForm;