import { Button, Photos } from '@/components';
import s from './gallery.module.css';

export const Gallery = () => {

  return (
    <section className={s.gallery}>
      <h3 className={s.title}>Less important title</h3>
      <Photos />
      <div className={s.btnContainer}>
        <Button
          name="Contact us"
          theme="primary"
        />
      </div>
    </section>
  );
};