import { CSSProperties, ReactNode } from 'react';
import styles from './icon-button.module.css';

type Props = {
  children: ReactNode;
  onClick(): void;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  disabled?: boolean;
};
export const IconButton = ({
  children,
  onClick,
  type = 'button',
  style,
  disabled
}: Props) => {
  return (
    <button
      className={styles.container}
      type={type}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
