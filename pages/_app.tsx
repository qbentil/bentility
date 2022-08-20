import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { StateProvider } from "../context/StateProvider";
import { initialState } from '../context/initialState';
import reducer from '../context/reducer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ToastContainer />
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
