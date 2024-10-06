import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
