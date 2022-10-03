import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import type { AppProps } from "next/app";
import { StateProvider } from "../context/StateProvider";
import { ToastContainer } from "react-toastify";
import { initialState } from '../context/initialState';
import reducer from '../context/reducer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
      />
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
