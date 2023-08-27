import { getWeathersFromStorage } from '@/utils/get-weathers-from-storage';
import { searchAndSaveWeather } from '@/utils/search-and-save-weather';
import { useCallback, useEffect, useState } from 'react';

const useGetWeathersFromStorage = () => {
  const [weathers, setWeathers] = useState<Weather[]>();

  useEffect(() => {
    const fetchData = async () => {
      const weathers = getWeathersFromStorage();
      if (!weathers?.length) {
        // Set default location
        const weather = await searchAndSaveWeather('Ho Chi Minh');
        if (weather) {
          setWeathers([weather]);
        }
      } else {
        setWeathers(weathers);
      }
    };

    fetchData();
  }, []);

  const refresh = useCallback(() => {
    const weathers = getWeathersFromStorage();
    setWeathers(weathers);
  }, []);

  return {
    weathers,
    refresh
  };
};

export default useGetWeathersFromStorage;
