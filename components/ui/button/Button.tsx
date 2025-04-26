import clsx from 'clsx';
import s from './button.module.css';
import type { ButtonProps } from './button.types';
import Link from 'next/link';

export const Button = ({
  theme,
  name,
}: ButtonProps) => {

  return (
    <Link
      href={'/contactUs'}
      className={clsx({
        [s.baseButton]: true,
        [s[theme]]: theme,
      })}
    >
      {name}
    </Link>
  );
};