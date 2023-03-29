import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherData } from "../Models/weatherData";
const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = '21396536a373fc5802cbc8fdf34c40d1';




export const useWeather = (city = "Catania") => {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${url}?q=${city}&appid=${apiKey}`);
        setWeatherData(data);
      } catch (error) {
        console.log(error); // Log the error message for debugging
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [city]);

  return [weatherData, setWeatherData, isLoading] as [
    WeatherData | undefined,
    Function,
    boolean
  ];
};