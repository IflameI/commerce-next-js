import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../styles/MainContent/Divination/Divination.module.scss';

interface IDivinationCard {
  img: any;
  alt: string;
  name: string;
  text: string;
  link: string;
}

const DivinationCard: React.FC<IDivinationCard> = ({ img, alt, name, text, link }) => {
  return (
    <div className={styles.divination__column}>
      <Link href={`/divination/${link}`}>
        <a>
          <div className={styles.divination__item}>
            <div className={styles.divination__img}>
              <Image src={img} alt={alt} />
            </div>
            <div className={styles.divination__textContent}>
              <h4 className={styles.divination__name}>{name}</h4>
              <p className={styles.divination__text}>{text}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default DivinationCard;
