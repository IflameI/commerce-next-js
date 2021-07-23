import { Layout } from '../components';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { wrapper } from '../redux/store';

//ok

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
