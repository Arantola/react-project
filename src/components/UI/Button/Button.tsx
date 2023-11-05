import { ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

function Button({
  children,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  disabled: false,
};

export default Button;
