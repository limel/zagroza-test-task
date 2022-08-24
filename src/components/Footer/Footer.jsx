import AnchorLink from 'react-anchor-link-smooth-scroll';
import s from './Footer.module.scss';

export default function Footer() {
  const handlerSubmit = e => {
    e.preventDefault();
  };
  return (
    <footer className={s.main}>
      <div className={s.container}>
        <AnchorLink href="#hero" offset="100" className={s.logo}>
          <svg>
            <use href="/sprite.svg#logo"></use>
          </svg>
        </AnchorLink>
        <nav className={s.navigation}>
          <ul className={s.menu}>
            <li>
              <AnchorLink
                href="#advantages"
                offset="100"
                className={s.menu__link}
              >
                o que fazemos
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#cta" offset="100" className={s.menu__link}>
                como te ajudamos
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#callback"
                offset="100"
                className={s.menu__link}
              >
                fale conosco
              </AnchorLink>
            </li>
          </ul>

          <ul className={s.social}>
            <li className={s.social__item}>
              <a
                href="https://www.instagram.com/"
                className={s.social__link}
                aria-label="instagram"
              >
                <svg>
                  <use href="/sprite.svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li className={s.social__item}>
              <a
                href="https://www.facebook.com/"
                className={s.social__link}
                aria-label="facebook"
              >
                <svg>
                  <use href="/sprite.svg#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={s.subscribe}>
        <span>Receba as novidades do nice</span>
        <form className={s.subscribe__form} onSubmit={e => handlerSubmit(e)}>
          <input type="email" placeholder="nome@email.com" />
          <button type="submit">Inscrever</button>
        </form>
      </div>
      <div className={s.copyright}>
        <span>Nice template by @lopesluiza on Figma - 2021</span>
      </div>
    </footer>
  );
}
