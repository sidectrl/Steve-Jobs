import { useWeather } from '../../hooks/useWeather';
import WeatherCard from '../Card/WeatherCard';
type CityProps = {
    name: string
}
const City = ({ name }: CityProps) => {
    const [weatherData, , isLoading] = useWeather(name);
  
    return (
      <div style={{ paddingLeft: '30px' }}>
        {isLoading && <p>loading</p>}
        {!isLoading && (
          <ul>
            <WeatherCard
            weatherData={weatherData}
            />
          </ul>
        )}
      </div>
    );
  };
  
  export default City;