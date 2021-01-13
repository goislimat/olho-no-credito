import { AppProps } from "next/app";
import { PasswordRecoveryProvider } from "pages/Auth/context/PasswordRecoveryContext";
import { SignupContextProvider } from "pages/Auth/context/SignupContext";
import { TryFreeContextProvider } from "pages/TryFree/context/TryFreeContext";
import ToastProvider from "ui/Toast";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <SignupContextProvider>
        <PasswordRecoveryProvider>
          <TryFreeContextProvider>
            <Component {...pageProps} />
          </TryFreeContextProvider>
        </PasswordRecoveryProvider>
      </SignupContextProvider>
    </ToastProvider>
  );
}
