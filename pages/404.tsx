import Head from 'next/head';
import styles from '../styles/error.module.scss';

const Error = () => {
  return (
    <section className={styles.error}>
      <Head>
        <title>Такой страницы не существует | Ошибка 404 </title>
      </Head>
      <div className={styles.error__row}>
        <div className={styles.error__item}>
          <p>Ошибка 404 | Такая страница не найдена</p>
        </div>
      </div>
    </section>
  );
};

export default Error;
