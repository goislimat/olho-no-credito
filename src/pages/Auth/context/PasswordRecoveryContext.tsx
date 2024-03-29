import { createContext, ReactNode, useContext, useState } from "react";

interface PasswordRecoveryFields {
  email?: string;
  cnpj?: string;
}

interface ContextProps {
  storePasswordRecoveryInfo: (props: PasswordRecoveryFields) => void;
  getRecoveryEmail: () => string | undefined;
}

const PasswordRecoveryContext = createContext<ContextProps | null>(null);
export const usePasswordRecovery = () => useContext(PasswordRecoveryContext);

interface Props {
  children: ReactNode;
}

export function PasswordRecoveryProvider({ children }: Props) {
  const [
    passwordRecoveryData,
    setPasswordRecoveryData,
  ] = useState<PasswordRecoveryFields | null>(null);

  function getRecoveryEmail(): string | undefined {
    return passwordRecoveryData?.email;
  }

  function storePasswordRecoveryInfo(props: PasswordRecoveryFields) {
    setPasswordRecoveryData({
      ...passwordRecoveryData,
      ...props,
    });
  }

  return (
    <PasswordRecoveryContext.Provider
      value={{ storePasswordRecoveryInfo, getRecoveryEmail }}
    >
      {children}
    </PasswordRecoveryContext.Provider>
  );
}
