import { Button } from '@/components';
import s from "./header.module.css";

export const Header = () => {

  return (
    <header className={s.header}>
      <h1>Some Company</h1>
      <Button
        name="Contact us"
        theme="primary"
      />
    </header>
  )
}