import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
