import { AppProps } from "next/app";
import ToastProvider from "ui/Toast";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
