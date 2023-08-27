import styles from './heading.module.css';
type Props = {
  title: string;
};
export const Heading = ({ title }: Props) => {
  return <h3 className={styles.heading}>{title}</h3>;
};
