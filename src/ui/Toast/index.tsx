import { createContext, ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { breakpoints, colors } from "ui/theme";
import { Icon } from "ui";

const ToastContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: 40px;
  right: 0;
  padding: 0 0 10px 40px;
  overflow-x: hidden;

  ${breakpoints.desktop} {
    top: 130px;
  }
`;

const ToastAlert = styled(motion.div)`
  position: relative;
  right: -360px;
  background: #ff0120;
  padding: 24px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 350px;
  border-radius: 17px 0 0 17px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`;

const Message = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: ${colors.white};
`;

interface ToastMessage {
  title: string;
  subtitle?: string;
}

interface ToastError {
  error: (message: ToastMessage) => void;
}

const TOAST_VISIBILITY_DURATION = 5000;

const TOAST_ANIMATION_VARIANTS = {
  show: { x: -340 },
  hidden: { x: 0 },
};

const ToastContext = createContext<ToastError | null>(null);
export const useToast = () => useContext(ToastContext);

interface Props {
  children: ReactNode;
}

function ToastProvider({ children }: Props) {
  const [toastText, setToastText] = useState<ToastMessage | null>(null);
  const [isToastVisible, setToastVisibility] = useState(false);

  function error(message: any) {
    setToastText(message);
    setToastVisibility(true);

    setTimeout(function () {
      setToastVisibility(false);
    }, TOAST_VISIBILITY_DURATION);
  }

  return (
    <ToastContext.Provider value={{ error }}>
      <AnimatePresence>
        <ToastContainer>
          <ToastAlert
            animate={isToastVisible ? "show" : "hidden"}
            exit={TOAST_ANIMATION_VARIANTS.hidden}
            variants={TOAST_ANIMATION_VARIANTS}
          >
            <Icon name="alert" />
            <div>
              <Message>{toastText?.title}</Message>
              {toastText?.subtitle && <Message>{toastText.subtitle}</Message>}
            </div>
          </ToastAlert>
        </ToastContainer>
      </AnimatePresence>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
