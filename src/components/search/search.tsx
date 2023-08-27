import { Button } from '../ui-elements/button';
import { TextField } from '../ui-elements/text-field';
import styles from './search.module.css';
import useSearch from './use-search';

type Props = {
  onSuccess(): void;
};
export const Search = ({ onSuccess }: Props) => {
  const {
    city,
    country,
    disabled,
    notFound,
    onCityChange,
    onCountryChange,
    onSearch,
    onClear
  } = useSearch({ onSuccess });
  return (
    <>
      <form className={styles.container} onSubmit={onSearch}>
        <div className={styles.searchTexts}>
          <TextField value={city} label="City" onChange={onCityChange} />
          <TextField
            value={country}
            label="Country"
            onChange={onCountryChange}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" disabled={disabled}>
            Search
          </Button>
          <Button
            disabled={disabled}
            onClick={onClear}
            style={{ marginLeft: '8px' }}
          >
            Clear
          </Button>
        </div>
      </form>
      {notFound && (
        <p className={styles.notFound}>
          No results found. Please make sure city or country is valid.
        </p>
      )}
    </>
  );
};
