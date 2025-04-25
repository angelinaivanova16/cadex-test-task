import { About, Gallery, Services } from "@/components";
import s from "./page.module.css";

export default function Home() {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <About />
        <Services />
        <Gallery />
      </main>
    </div>
  );
}
