import { createContext, ReactNode, useContext, useState } from "react";

interface TryFreeFields {
  cnpj?: string;
  phone?: string;
  personalInfo?: {
    fullName: string;
    cpf: string;
    birthday: string;
    email: string;
    emailConfirmation: string;
    password: string;
    passwordConfirmation: string;
  };
  address?: {
    zipCode: string;
    streetName: string;
    number: string;
    extra: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  file?: string;
}

interface ContextProps {
  addInfo: (props: TryFreeFields) => void;
}

const TryFreeContext = createContext<ContextProps | null>(null);
export const useTryFreeContext = () => useContext(TryFreeContext);

interface Props {
  children: ReactNode;
}

export function TryFreeContextProvider({ children }: Props) {
  const [tryFreeData, setTryFreeData] = useState<TryFreeFields | null>(null);

  function addInfo(props: TryFreeFields) {
    setTryFreeData({
      ...tryFreeData,
      ...props,
    });
  }

  return (
    <TryFreeContext.Provider value={{ addInfo }}>
      {children}
    </TryFreeContext.Provider>
  );
}
