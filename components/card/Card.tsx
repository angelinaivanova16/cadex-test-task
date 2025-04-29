import s from './card.module.css';
import type { CardProps } from './card.types';

export const Card = ({
  title,
  description,
}: CardProps) => {

  return (
    <div className={s.card}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
    </div>
  )
}