import clsx from 'clsx';
import s from './button.module.css';
import type { ButtonProps } from './button.types';

export const Button = ({
  disabled = false,
  onClick,
  theme,
  name,
}: ButtonProps) => {

  return (
    <button
      className={clsx({
        [s.baseButton]: true,
        [s[theme]]: theme,
        [s.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};