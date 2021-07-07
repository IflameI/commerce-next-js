import { MainHeader } from '..';
import styles from '../../styles/Home.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='container'>
      <MainHeader />
      <div className={styles.wrapper}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
