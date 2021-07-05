import styles from '../../../styles/MainContent/Zodiacs/Symbols.module.scss';
import Image from 'next/image';

interface ISymbolsItem {
  img: any;
  date: string;
  alt: string;
  name: string;
}

const SymbolsItem: React.FC<ISymbolsItem> = ({ img, date, name, alt }) => {
  return (
    <li>
      <div className={styles.symbols__item}>
        <Image src={img} alt={alt} />
      </div>
      <div className={styles.symbols__name}>{name}</div>
      <div className={styles.symbols__date}>{date}</div>
    </li>
  );
};

export default SymbolsItem;
