import styles from '../../../styles/MainContent/Zodiacs/Symbols.module.scss';
import Image from 'next/image';

interface ISymbolsItem {
  img: any;
  alt: string;
  name: string;
}

const SymbolsItem: React.FC<ISymbolsItem> = ({ img, name, alt }) => {
  return (
    <li>
      <div className={styles.symbols__item}>
        <Image src={img} alt={alt} />
      </div>
      <div className={styles.symbols__name}>{name}</div>
    </li>
  );
};

export default SymbolsItem;
