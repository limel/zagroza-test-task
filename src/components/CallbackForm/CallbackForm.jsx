import s from './CallbackForm.module.scss';
import titleIcon from 'images/chat_icon.png';

export default function CallbackForm() {
  const handlerSubmit = e => {
    e.preventDefault();
  };
  return (
    <article className={s.main} id="callback">
      <h3 className={s.title}>
        <img src={titleIcon} alt="chat icon" className={s.title__img} />
        Ainda tem dúvidas? Fale conosco!
      </h3>
      <div className={s.container}>
        <div className={s.info}>
          <p>
            Ofereça um meio de comunicação direto. Pode ser um
            <a href="mailto:contato@email.com.br"> contato@email.com.br </a>
          </p>
          <p>
            Ou crie um formulário ao lado que entrem em contato{' '}
            <strong>o mais rápido possível!</strong>
          </p>
          <span className={s.notice}>
            <svg>
              <use href="/sprite.svg#whatsapp"></use>
            </svg>
            Hey! Estamos no whatsapp!
          </span>
        </div>

        <form className={s.form} onSubmit={e => handlerSubmit(e)}>
          <label className={s.form__input}>
            <span>Name</span>
            <input type="text" name="name" placeholder="Nome Sobrenome" />
          </label>
          <label className={s.form__input}>
            <span>Email</span>
            <input type="text" name="email" placeholder="nome@email.com.br" />
          </label>
          <label className={s.form__input}>
            <span>Telefone</span>
            <input type="text" name="phone" placeholder="21 9988-7766" />
          </label>
          <button type="submit" className={s.form__button}>
            Enviar!
          </button>
        </form>
      </div>
    </article>
  );
}
