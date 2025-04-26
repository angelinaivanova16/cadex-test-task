import s from './services.module.css';
import { Button, Card } from '@/components';
import { servicesItems } from './servicesItems';

export const Services = () => {

  return (
    <section className={s.services}>
      <h2 className={s.title}>Also very important title</h2>
      <div className={s.cardList}>
        {servicesItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className={s.btnContainer}>
        <Button
          name="Contact us"
          theme="primary"
        />
      </div>
    </section>
  );
};