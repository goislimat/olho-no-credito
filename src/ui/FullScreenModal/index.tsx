import { ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { breakpoints, typography } from "ui/theme";

const Overlay = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(30, 30, 30, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: height 1ms, opacity 250ms;

    ${!isOpen &&
    css`
      height: 0;
      opacity: 0;
    `}

    ${isOpen &&
    css`
      height: auto;
      opacity: 1;
    `}
  `}
`;

const ModalContent = styled.div`
  background: #f1f1f1;
  width: 100vw;
  height: 100vh;

  ${breakpoints.desktop} {
    background: linear-gradient(
      139.78deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0.79) 101.92%
    );
    border-radius: 24px;
    padding: 60px 24px;
    max-width: 390px;
    height: auto;
  }
`;

interface Props {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
}

function FullScreenModal({ isOpen, close, children }: Props) {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <Overlay isOpen={isOpen} onClick={close}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Overlay>
  );
}

export default FullScreenModal;
