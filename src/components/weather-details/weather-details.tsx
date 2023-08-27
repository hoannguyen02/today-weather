import { WeatherDetailsItem } from './weather-details-item';
import styles from './weather-details.module.css';

// openweathermap.org/img/w/11d.png

https: type Props = {
  weather: Weather;
};

export const WeatherDetails = ({ weather }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.location}>{weather.location}</span>
      <h1 className={styles.title}>{weather.title}</h1>
      <div className={styles.content}>
        <WeatherDetailsItem name="Description" value={weather.description} />
        <WeatherDetailsItem name="Temperature" value={weather.temperature} />
        <WeatherDetailsItem name="Humidity" value={weather.humidity} />
        <WeatherDetailsItem name="Time" value={weather.time} />
      </div>
    </div>
  );
};
