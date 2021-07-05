import Image from 'next/image';

import styles from '../../styles/MainContent/MainContent.module.scss';
import { MainContentInfo, infoImg, Symbols, Divination } from '..';

const MainContent: React.FC = () => {
  return (
    <section className={styles.mainContent}>
      <div className={styles.mainContent__slider}>
        <Image src={infoImg} alt='Изображение гороскопа' />
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
