import Image from 'next/image';

import styles from '../../styles/MainContent/MainContent.module.scss';
import { circleImg } from '..';

const MainContentInfo: React.FC = () => {
  return (
    <div className={styles.mainContent__info}>
      <div className={styles.mainContent__wrapper}>
        <div className={styles.mainContent__left}>
          <h2 className={styles.mainContent__title}>Что такое ведическая астрология?</h2>
          <p className={styles.mainContent__suptitle}>
            Ведическая астрология или как ее еще называют лунная, одна из самых древних форм
            мистического знания. С помощью нее узнают, как на человека повлияло движение звезд или
            космических обьектов. Согласно ведической астрологии, каждый человек подвержен закону
            кармы, а значит любой человек совершая хорошие и достойные поступки может достичь любой
            цели
          </p>
        </div>
        <div className={styles.mainContent__circle}>
          <Image src={circleImg} alt='Изображение круглого гороскопа' />
        </div>
      </div>
    </div>
  );
};

export default MainContentInfo;
