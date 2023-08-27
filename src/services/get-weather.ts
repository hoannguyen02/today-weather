import axios from 'axios';
import isEmpty from 'lodash.isempty';

type Props = {
  lon: number;
  lat: number;
};
export const getWeather = ({
  lon,
  lat
}: Props): Promise<{
  title: string;
  description: string;
  temperature: string;
  humidity: string;
}> =>
  new Promise(async (resolve, reject) => {
    try {
      const geoUrl = `${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP}/data/2.5/weather?lat=${lat}&lon=${lon}&&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_APP_ID}&units=metric`;
      const weatherRes = await axios.get(geoUrl).then((res) => res.data);
      if (!isEmpty(weatherRes)) {
        const { main, weather } = weatherRes as WeatherResponse;
        resolve({
          temperature: `${main.temp_min}°C - ${main.temp_min}°C`,
          humidity: `${main.humidity}%`,
          title: weather[0]?.main,
          description: weather[0]?.description
        });
      }
    } catch (error) {
      reject(error);
    }
  });
