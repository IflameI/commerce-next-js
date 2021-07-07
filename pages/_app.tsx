import { Layout } from '../components';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { createWrapper } from 'next-redux-wrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
