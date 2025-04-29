'use client';

import { useState } from 'react';
import s from './about.module.scss';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

export const About = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className={s.about}>
      <div className={s.text}>
        <h1 className={s.title}>The most important title on the page</h1>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
        </p>
      </div>
      <div className={s.video}>
        {!videoError ? (
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width="100%"
            height="100%"
            controls={true}
            onError={handleVideoError}
          />
        ) : (
          <div className={s.warning}>
            <p>К сожалению, это видео недоступно в вашем регионе или при использовании определенных методов доступа.</p>
            <p>Пожалуйста, попробуйте использовать VPN для просмотра.</p>
          </div>
        )}
      </div>
    </section>
  );
};