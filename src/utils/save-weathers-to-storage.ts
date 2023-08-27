import { WEATHERS_STORAGE_KEY } from '@/constants';
import { saveToLocalStorage } from '@/services/localstorage';
import { getWeathersFromStorage } from './get-weathers-from-storage';

export const saveWeathersToStorage = (weather: Weather) => {
  const weathers = getWeathersFromStorage();
  if (!weathers?.length) {
    saveToLocalStorage([weather], WEATHERS_STORAGE_KEY);
  } else {
    // Remove if exists
    const existingIdx = weathers.findIndex(
      (d) => d.location.toLowerCase() === weather.location.toLowerCase()
    );
    if (existingIdx >= 0) {
      weathers.splice(existingIdx, 1);
    }
    // Add current weather to the top of weathers
    weathers.unshift(weather);
    saveToLocalStorage(weathers, WEATHERS_STORAGE_KEY);
  }
};
