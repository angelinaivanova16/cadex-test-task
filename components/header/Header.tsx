import { Button } from '@/components';
import s from "./header.module.css";

export const Header = () => {

  return (
    <header className={s.header}>
      <h2>Some Company</h2>
      <Button
        name="Contact us"
        theme="primary"
      />
    </header>
  )
}