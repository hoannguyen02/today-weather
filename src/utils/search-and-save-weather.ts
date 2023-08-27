import { getGeo } from '@/services/get-geo';
import { getWeather } from '@/services/get-weather';
import { getCurrentTime } from './get-current-time';
import { saveWeathersToStorage } from './save-weathers-to-storage';

export const searchAndSaveWeather = async (
  city: string,
  country?: string
): Promise<Weather | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { countryCode, lat, lon } = await getGeo(
        city && country ? `${city}, ${country}` : city
      );
      if (lat || lon) {
        const baseWeather = await getWeather({
          lat,
          lon
        });
        const time = getCurrentTime();
        const location = city ? `${city}, ${countryCode}` : countryCode;
        const weather: Weather = {
          ...baseWeather,
          time,
          location,
          city,
          country
        };
        saveWeathersToStorage(weather);
        resolve(weather);
      } else {
        reject(null);
      }
    } catch (error) {
      console.error('Failed to search and save weather to storage', error);
      reject(null);
    }
  });
};
