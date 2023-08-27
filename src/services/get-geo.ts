import axios from 'axios';

export const getGeo = (
  location: string
): Promise<{
  lat: number;
  lon: number;
  countryCode: string;
}> =>
  new Promise(async (resolve, reject) => {
    try {
      const geoUrl = `${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP}/geo/1.0/direct?q=${location}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_APP_ID}`;
      const geos = await axios.get(geoUrl).then((res) => res.data);
      if (geos?.length) {
        const { lat, lon, country } = geos[0] || {};
        resolve({
          lat,
          lon,
          countryCode: country
        });
      } else {
        resolve({
          lat: 0,
          lon: 0,
          countryCode: ''
        });
      }
    } catch (error) {
      reject(error);
    }
  });
