import Image from 'next/image';

import styles from '../../../styles/MainContent/Divination/Divination.module.scss';

interface IDivinationCard {
  img: any;
  alt: string;
  name: string;
  text: string;
}

const DivinationCard: React.FC<IDivinationCard> = ({ img, alt, name, text }) => {
  return (
    <div className={styles.divination__column}>
      <div className={styles.divination__item}>
        <div className={styles.divination__img}>
          <Image src={img} alt={alt} />
        </div>
        <div className={styles.divination__textContent}>
          <h4 className={styles.divination__name}>{name}</h4>
          <p className={styles.divination__text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DivinationCard;
