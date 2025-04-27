'use client';

import s from './about.module.scss';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

export const About = () => {

  return (
    <section className={s.about}>
      <div className={s.text}>
        <h2 className={s.title}>Most important title on the page</h2>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
        </p>
      </div>
      <div className={s.video}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </section>
  );
};