import { Layout } from '../components';
import App from 'next/app';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
