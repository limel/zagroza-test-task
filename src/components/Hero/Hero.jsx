import s from './Hero.module.scss';
import heroNoize from 'images/noise.png';
import { useMediaQuery } from 'react-responsive';
import heroImg from 'images/hero-img.png';
import heroImgMobile from 'images/hero-img_mobile.png';

export default function Hero() {
  const isTablet = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  return (
    <section
      id="hero"
      className={s.main}
      style={{ backgroundImage: `url(${heroNoize})` }}
    >
      <div className={s.container}>
        <div className={s.text}>
          <h1 className={s.title}>Um slogan chamativo aqui.</h1>
          <h2 className={s.subtitle}>
            Um texto sobre o seu produto ou serviço. Explique{' '}
            <strong>porque ele é valioso</strong> e direcione o usuário ao
            próximo objetivo.
          </h2>
          <div className={s.cta}>
            <button type="button" className={s.cta__button}>
              Eu quero!
            </button>
            <button type="button" className={s.cta__button_transparent}>
              Conhecer mais
            </button>
          </div>
        </div>
      </div>

      <div className={s.gradient__rect}></div>
      <div className={s.gradient__circle}></div>
      <img
        src={isTablet ? heroImgMobile : heroImg}
        alt="smile man"
        className={s.decoration__img}
      />
    </section>
  );
}
