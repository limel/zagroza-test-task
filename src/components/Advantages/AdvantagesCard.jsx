import s from './AdvantagesCard.module.scss';
import { useMediaQuery } from 'react-responsive';

export default function AdvantagesCard({ img, title, desc }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <>
      {isMobile ? (
        <div className={s.wrapper}>
          <img src={img} alt={title} className={s.img} />
          <h4 className={s.title}>{title}</h4>
          <p className={s.desc}>{desc}</p>
          <button type="button" aria-label="add" className={s.button}>
            <svg>
              <use href="/sprite.svg#cross"></use>
            </svg>
          </button>
        </div>
      ) : (
        <li className={s.wrapper}>
          <img src={img} alt={title} className={s.img} />
          <h4 className={s.title}>{title}</h4>
          <p className={s.desc}>{desc}</p>
          <button type="button" aria-label="add" className={s.button}>
            <svg>
              <use href="/sprite.svg#cross"></use>
            </svg>
          </button>
        </li>
      )}
    </>
  );
}
