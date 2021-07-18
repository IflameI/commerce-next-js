import Link from 'next/link';
import styles from '../../styles/layout/MainHeader.module.scss';

const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__top}>
          <Link href='/'>
            <a>
              <h1 className={styles.header__title}>Глаза судьбы</h1>
            </a>
          </Link>
          <h2 className={styles.header__subtitle}>
            Предсказания от лучших астрологов укажут вам правильный путь
          </h2>
        </div>
        <div className={styles.header__bottom}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <div className={styles.header__btn}>
                <span />
              </div>
              <li>
                <Link href='/compatibility'>
                  <a>
                    <div>Совместимость в любви по знакам зодиака</div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/mercury'>
                  <a>
                    <div>Ретроградный меркурий 2021</div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/horoscopeNewYear'>
                  <a>
                    <div>Гороскоп на 2021 год</div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/numerology'>
                  <a>
                    <div>Нумерология</div>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
