import React from 'react'
import { WeatherData } from '../../Models/weatherData'
type WeatherProps = {
    weatherData?: WeatherData
}
const WeatherCard = ({ weatherData }: WeatherProps) => {
    return (
        <>
            <h2>{weatherData?.name}</h2>
            <p>{weatherData?.weather[0].description}</p>
        </>
    )
}

export default WeatherCard