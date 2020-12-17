import { AppProps } from "next/app";
import { SignupContextProvider } from "pages/Auth/context/SignupContext";
import ToastProvider from "ui/Toast";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <SignupContextProvider>
        <Component {...pageProps} />
      </SignupContextProvider>
    </ToastProvider>
  );
}
