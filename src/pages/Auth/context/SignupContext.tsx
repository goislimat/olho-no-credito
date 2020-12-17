import { ReactNode, createContext, useContext, useState } from "react";

interface SignupFields {
  cnpj?: string;
  phone?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  address?: {
    zipCode: string;
    streetName: string;
    number: string;
    extra: string;
    neighborhood: string;
    city: string;
    state: string;
  };
}

interface ContextProps {
  getAllSignupInfo: () => SignupFields | null;
  storeSignupInfo: (props: SignupFields) => void;
  clearSignupInfo: () => void;
}

const SignupContext = createContext<ContextProps | null>(null);
export const useSignup = () => useContext(SignupContext);

interface Props {
  children: ReactNode;
}

export function SignupContextProvider({ children }: Props) {
  const [signupData, setSignupData] = useState<SignupFields | null>(null);

  function getAllSignupInfo() {
    return signupData;
  }

  function storeSignupInfo(props: SignupFields) {
    setSignupData({
      ...signupData,
      ...props,
    });
  }

  function clearSignupInfo() {
    setSignupData(null);
  }

  return (
    <SignupContext.Provider
      value={{ getAllSignupInfo, storeSignupInfo, clearSignupInfo }}
    >
      {children}
    </SignupContext.Provider>
  );
}
