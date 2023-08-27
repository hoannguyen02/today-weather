import Image from 'next/image';
import { IconButton } from '../ui-elements/icon-button';
import styles from './weather-Item.module.css';

type Props = {
  weather: Weather;
  index: number;
  onSearch(city: string, country?: string): void;
  onDelete(location: string): void;
};
export const WeatherItem = ({ weather, index, onSearch, onDelete }: Props) => {
  const { location, time, city, country } = weather;
  return (
    <div className={styles.container}>
      <span className={styles.left}>{`${index + 1}. ${location}`}</span>
      <div className={styles.right}>
        <span>{time}</span>
        <span className={styles.rightActions}>
          <IconButton
            style={{ marginLeft: '10px' }}
            onClick={() => onSearch(city, country)}
          >
            <Image
              src={'/icons/search-icon.svg'}
              alt="Search current city weather"
              width={20}
              height={20}
            />
          </IconButton>
          <IconButton
            style={{ marginLeft: '10px' }}
            onClick={() => onDelete(location)}
          >
            <Image
              src={'/icons/delete-icon.svg'}
              alt="Remove weather in save history"
              width={20}
              height={20}
            />
          </IconButton>
        </span>
      </div>
    </div>
  );
};
