import { searchAndSaveWeather } from '@/utils/search-and-save-weather';
import { useCallback, useState } from 'react';

type Props = {
  onSuccess(): void;
};
const useSearch = ({ onSuccess }: Props) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const onClear = useCallback(() => {
    setCity('');
    setCountry('');
    setNotFound(false);
  }, []);

  const onSearch = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      notFound && setNotFound(false);
      try {
        setSearching(true);
        await searchAndSaveWeather(city, country);
        // Clear input after search
        onClear();
        // Emit onSuccess event
        onSuccess();
      } catch (error) {
        console.error('error', error);
        setNotFound(true);
      } finally {
        setSearching(false);
      }
    },
    [city, country, notFound]
  );

  const onCityChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setCity(value);
    },
    []
  );

  const onCountryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setCountry(value);
    },
    []
  );

  return {
    city,
    country,
    disabled: searching || !(city || country),
    notFound,
    onCityChange,
    onCountryChange,
    onSearch,
    onClear
  };
};

export default useSearch;
