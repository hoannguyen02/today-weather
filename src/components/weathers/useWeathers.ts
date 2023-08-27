import { WEATHERS_STORAGE_KEY } from '@/constants';
import { saveToLocalStorage } from '@/services/localstorage';
import { searchAndSaveWeather } from '@/utils/search-and-save-weather';
import { useCallback } from 'react';

type Props = {
  weathers: Weather[];
  refresh(): void;
};
const useWeathers = ({ weathers, refresh }: Props) => {
  const onDelete = useCallback(
    (location: string) => {
      const newWeathers = [...weathers];
      const existingIdx = newWeathers.findIndex(
        (d) => d.location.toLowerCase() === location.toLowerCase()
      );
      if (existingIdx >= 0) {
        newWeathers.splice(existingIdx, 1);
      }
      saveToLocalStorage(newWeathers, WEATHERS_STORAGE_KEY);
      refresh();
    },
    [weathers]
  );

  const onSearch = useCallback(
    async (city: string, country?: string) => {
      await searchAndSaveWeather(city, country);
      refresh();
    },
    [weathers]
  );

  return {
    onSearch,
    onDelete
  };
};

export default useWeathers;
