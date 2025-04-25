import Image from "next/image";
import s from "./footer.module.css";

export function Footer() {

  return (
    <footer className={s.footer}>
      <p>Some Company {new Date().getFullYear()}</p>
      <a
        href="https://github.com/angelinaivanova16/cadex-test-task"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/github.svg"
          alt="Globe icon"
          width={19}
          height={19}
        />
        Go to my github →
      </a>
    </footer>
  )
}