import styles from './text-field.module.css';

type Props = {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
  type?: string;
  label?: string;
};
export const TextField = ({ onChange, value, type = 'text', label }: Props) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}: </label>}
      <input
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
