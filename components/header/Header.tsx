import { Button } from '@/components';
import s from "./header.module.scss";
import Link from 'next/link';

export const Header = () => {

  return (
    <header className={s.header}>
      <Link className={s.title} href='/'>Some Company</Link>
      <Button
        name="Contact us"
        theme="primary"
      />
    </header>
  )
}