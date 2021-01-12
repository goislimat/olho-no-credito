import { AppProps } from "next/app";
import { PasswordRecoveryProvider } from "pages/Auth/context/PasswordRecoveryContext";
import { SignupContextProvider } from "pages/Auth/context/SignupContext";
import ToastProvider from "ui/Toast";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <SignupContextProvider>
        <PasswordRecoveryProvider>
          <Component {...pageProps} />
        </PasswordRecoveryProvider>
      </SignupContextProvider>
    </ToastProvider>
  );
}
