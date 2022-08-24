import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import s from './Header.module.scss';

export default function Header() {
  const [active, setActive] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  // const isTablet = useMediaQuery({
  //   query: '(max-width: 1023px)',
  // });

  return (
    <header className={s.main}>
      {isMobile ? (
        <>
          <div className={s.container}>
            <button
              type="button"
              aria-label="toggle"
              onClick={() => setActive(!active)}
              className={
                active ? `${s.toggle} ${s.toggle_active}` : `${s.toggle}`
              }
            >
              <svg>
                <use href="/sprite.svg#toggle"></use>
              </svg>
            </button>
            <AnchorLink
              href="#hero"
              offset="100"
              className={s.logo}
              onClick={() => setActive(false)}
            >
              <svg>
                <use href="/sprite.svg#logo"></use>
              </svg>
            </AnchorLink>

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

            <nav
              className={
                active
                  ? `${s.navigation} ${s.navigation_active}`
                  : `${s.navigation}`
              }
            >
              <AnchorLink
                href="#hero"
                offset="100"
                className={s.logo}
                onClick={() => setActive(false)}
              >
                <svg>
                  <use href="/sprite.svg#logo"></use>
                </svg>
              </AnchorLink>
              <ul className={s.menu}>
                <li>
                  <AnchorLink
                    href="#advantages"
                    offset="100"
                    className={s.menu__link}
                    onClick={() => setActive(false)}
                  >
                    o que fazemos
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="#cta"
                    offset="100"
                    className={s.menu__link}
                    onClick={() => setActive(false)}
                  >
                    como te ajudamos
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="#callback"
                    offset="100"
                    className={s.menu__link}
                    onClick={() => setActive(false)}
                  >
                    fale conosco
                  </AnchorLink>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={
              active ? `${s.overlay_active} ${s.overlay}` : `${s.overlay}`
            }
            onClick={() => setActive(false)}
          ></div>
        </>
      ) : (
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
      )}
    </header>
  );
}
