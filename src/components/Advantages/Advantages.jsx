import s from './Advantages.module.scss';
import AdvantagesCard from './AdvantagesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import img1 from 'images/target.png';
import img2 from 'images/hand.png';
import img3 from 'images/cards.png';
import 'swiper/css';

export default function Advantages() {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <article className={s.main} id="advantages">
      <div className={s.container}>
        <h3 className={s.title}>Um subtítulo para quem rolou até aqui!</h3>
        <p className={s.subtitle}>
          Aproveite esta seção para destacar os benefícios do seu produto ou
          serviço. Palavras-chave ajudam no SEO.
        </p>
        {isMobile ? (
          <Swiper spaceBetween={20} slidesPerView={1.2} className={s.swiper}>
            <SwiperSlide>
              <AdvantagesCard
                img={img1}
                title={'Rápido'}
                desc={
                  'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdvantagesCard
                img={img2}
                title={'Do seu jeito'}
                desc={
                  'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <AdvantagesCard
                img={img3}
                title={'Como você queria'}
                desc={
                  'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'
                }
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <ul className={s.list}>
            <AdvantagesCard
              img={img1}
              title={'Rápido'}
              desc={
                'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'
              }
            />
            <AdvantagesCard
              img={img2}
              title={'Do seu jeito'}
              desc={
                'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'
              }
            />
            <AdvantagesCard
              img={img3}
              title={'Como você queria'}
              desc={
                'Aproveite esta seção para destacar os benefícios do seu produto ou serviço.'
              }
            />
          </ul>
        )}
      </div>
    </article>
  );
}
