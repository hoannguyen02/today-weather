import { Heading } from '../heading';
import useWeathers from './useWeathers';
import { WeatherItem } from './weather-Item';
import styles from './weathers.module.css';

type Props = {
  weathers: Weather[];
  refresh(): void;
};
export const Weathers = ({ weathers, refresh }: Props) => {
  const { onSearch, onDelete } = useWeathers({ weathers, refresh });
  return (
    <div className={styles.container}>
      <Heading title="Search History" />
      <div className={styles.content}>
        {weathers.map((w, index) => (
          <WeatherItem
            key={w.location}
            weather={w}
            index={index}
            onSearch={onSearch}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
