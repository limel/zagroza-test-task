import s from './CTA.module.scss';
import ctaImg from 'images/cta_bg.png';

export default function CTA() {
  return (
    <article className={s.main} id="cta">
      <div className={s.container}>
        <div className={s.text}>
          <a
            href="https://www.instagram.com/explore/tags/contecomagente/"
            target="_blank"
            rel="noreferrer"
            className={s.hashtag}
          >
            #contecomagente
          </a>
          <h3 className={s.title}>Simples, rápido e do seu jeito.</h3>
          <p className={s.desc}>
            Mostre os valores da sua marca e como ela pode fazer parte da vida
            do usuário que está lendo. Gerar identificação é a chave para{' '}
            <strong> conquistar seu cliente.</strong>
          </p>
          <button type="button" className={s.button}>
            Eu quero!
          </button>
        </div>

        <div className={s.gradient__rect}></div>
        <div className={s.gradient__circle}></div>
      </div>

      <img
        src={ctaImg}
        alt="man talking on phone"
        className={s.decoration__img}
      />
    </article>
  );
}
