import classNames from 'classnames';
import Link from 'next/link';
import styles from '../../styles/layout/MainHeader.module.scss';

interface INavSite {
  open: boolean;
}

const NavSite: React.FC<INavSite> = ({ open }) => {
  return (
    <nav
      className={classNames(styles.header__top, {
        open: open,
      })}>
      <ul className={styles.header__list}>
        <li>
          <Link href='/compatibility'>
            <a>
              <div>Совместимость в любви по знакам зодиака</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/mercury'>
            <a>
              <div>Ретроградный меркурий 2021</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/horoscopeNewYear'>
            <a>
              <div>Гороскоп на 2021 год</div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/numerology'>
            <a>
              <div>Нумерология</div>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSite;
