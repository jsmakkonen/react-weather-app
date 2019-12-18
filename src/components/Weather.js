import React from 'react';

const Weather = props => (
    <div className="weather-info">
        { props.city && props.country && <p className="weather-key"> Location: <span>{ props.city }, { props.country }</span></p> }
        { props.temperature && <p className="weather-text"> Temperature: <span>{ props.temperature }</span> °C </p> }
        { props.humidity && <p className="weather-text"> Humidity: <span>{ props.humidity }</span> % </p> }
        { props.description && <p className="weather-text"> Conditions: <span>{ props.description }</span></p> }
        { props.error && <p className="weather-error">{ props.error }</p> }
    </div>
);

export default Weather;