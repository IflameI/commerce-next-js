import { MainContentInfo, Symbols, Divination } from '..';
import { useTypedSelector } from '../../redux/typeHooks/useTypedSelector';

import styles from '../../styles/MainContent/MainContent.module.scss';

const MainContent: React.FC = () => {
  const { items } = useTypedSelector((state) => state.zodiac);
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
        {items.data.elements[0].elements !== undefined && (
          <Symbols zodiacs={items.data.elements[0].elements} />
        )}
      </div>
    </section>
  );
};

export default MainContent;
