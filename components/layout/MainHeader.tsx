import Link from 'next/link';
import styles from '../../styles/layout/MainHeader.module.scss';

import { Burger } from '..';

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
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
