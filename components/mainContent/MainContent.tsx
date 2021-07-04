import styles from '../../styles/MainContent/MainContent.module.scss';
import Image from 'next/image';
import infoImg from '../../public/horosckope.jpg';
import circleImg from '../../public/circle-horoskop.png';

const MainContent: React.FC = () => {
  return (
    <section className={styles.mainContent}>
      <div className={styles.mainContent__slider}>
        <Image src={infoImg} alt='Horoscop image' />
      </div>
      <div className={styles.mainContent__info}>
        <div className={styles.mainContent__wrapper}>
          <div className={styles.mainContent__left}>
            <h2 className={styles.mainContent__title}>Что такое судьбоносный гороскоп?</h2>
            <p className={styles.mainContent__suptitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, blanditiis. Ad
              impedit deleniti autem eum soluta perferendis aspernatur qui nam. Non iste architecto
              hic eum temporibus in earum aliquam ab nemo ratione? Dolorum optio veritatis
              perferendis quod ipsum itaque, aliquam nesciunt quo quas voluptatum soluta aliquid
              quidem deleniti odio tenetur provident minima possimus harum.
            </p>
          </div>
          <div className={styles.mainContent__circle}>
            <Image src={circleImg} alt='Circle Horoscop image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
