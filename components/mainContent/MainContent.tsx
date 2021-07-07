import { MainContentInfo, Symbols, Divination } from '..';

import styles from '../../styles/MainContent/MainContent.module.scss';

interface IMainContent {
  zodiacs: any;
}

const MainContent: React.FC<IMainContent> = ({ zodiacs }) => {
  return (
    <section className={styles.mainContent}>
      {/* {arrayZodiac.map((zodiac: any, index: number) => (
        <p key={`${index}__${zodiacs.name}`}>{zodiac[0].elements[0].text}</p>
      ))} */}
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
        <Symbols zodiacs={zodiacs} />
      </div>
    </section>
  );
};

export default MainContent;
