import { Button } from '@/components';
import s from "./header.module.css";
import Link from 'next/link';

export const Header = () => {

  return (
    <header className={s.header}>
      <h1 className={s.title}><Link href='/'>Some Company</Link></h1>
      <Button
        name="Contact us"
        theme="primary"

      />
    </header>
  )
}