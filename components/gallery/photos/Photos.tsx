import s from "./photos.module.css";

export const Photos = () => {

  const photos = [
    'photo2.jpg',
    'photo4.jpg',
    'photo5.jpg',
    'photo8.jpg',
    'photo9.jpg',
    'photo1.jpg',
    'photo10.jpg',
  ]

  return (
    <div className={s.container}>
      {photos.map((item, index) => {
        return (
          <div
            key={index}
            className={s.imageContainer}
            style={{ backgroundImage: `url(${item})` }}
          >
          </div>
        );
      })}
    </div>
  )
}