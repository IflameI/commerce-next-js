import Head from 'next/head';

import { MainHeader } from '..';
import styles from '../../styles/Home.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='container'>
      <MainHeader />
      <div className={styles.wrapper}>
        <main>
          <Head>
            <html lang='ru' />
            <title>Глаза судьбы — бесплатное онлайн гадание на картах таро </title>
            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
            <meta
              httpEquiv='Content-Type'
              content='Глаза судьбы — это сборник лучших ведических онлайн гаданий. Если у вас возникли трудности в любви, наши расклады карт таро помогут вам в трудную минуту. Или возможно вас настигла беда с деньгами и вы не знаете, что делать дальше, наши предсказатели приготовили советы и для этой ситуации'></meta>
          </Head>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
