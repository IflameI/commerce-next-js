import Image from 'next/image';

import styles from '../../styles/MainContent/MainContent.module.scss';
import { MainContentInfo, infoImg, Symbols, Divination } from '..';

const MainContent: React.FC = () => {
  return (
    <section className={styles.mainContent}>
      <div className={styles.mainContent__top}>
        <div className={styles.mainContent__item}>
          <p className={styles.mainContent__itemText}>
            Астрологи и гадалки со всего мира используют ведические методы предсказания. Нам удалось
            уговорить нескольких специалистов поделиться этими древними техниками и теперь они
            представленны на нашем сайте. С помощью них вы сможете сделать правильный выбор.
          </p>
        </div>
      </div>
      <div className={styles.mainContent__content}>
        <MainContentInfo />
        <Divination />
        <Symbols />
      </div>
    </section>
  );
};

export default MainContent;
