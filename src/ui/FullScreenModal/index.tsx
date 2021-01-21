import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Icon } from "ui";
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

const NavHeader = styled.div`
  background: white;
  height: 86px;
  width: 100%;
  display: inline-grid;
  grid-template-columns: auto 1fr auto;
  padding: 16px 24px;
  align-items: center;

  button {
    z-index: 10;
    background: transparent;
    border: 0;
    outline: 0;
  }

  svg path {
    fill: #30c43e;
  }

  ${breakpoints.desktop} {
    display: none;
  }
`;

const Title = styled.p`
  font-family: ${typography.inter};
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  color: #686868;
  margin: 80px 40px 40px;

  ${breakpoints.desktop} {
    margin: 0 0 40px;
  }
`;

const Text = styled.p`
  font-family: ${typography.roboto};
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: #686868;
  margin: 0 40px 24px;

  ${breakpoints.desktop} {
    margin: 0 0 24px;
  }
`;

const ActionsContainer = styled.div`
  display: grid;
  row-gap: 24px;
  margin: 48px 40px 0;

  ${breakpoints.desktop} {
    margin: 48px 0 0;
  }
`;

interface ButtonProps {
  color: "green" | "red" | "blue" | "purple";
}

const Button = styled.button<ButtonProps>`
  ${({ color }) => css`
    display: grid;
    place-content: center center;
    width: 100%;
    height: 54px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    cursor: pointer;

    font-family: ${typography.roboto};
    font-size: 18px;
    font-weight: 700;
    line-height: 29px;
    color: white;

    ${color === "green" &&
    css`
      background: linear-gradient(180deg, #69ed47 0%, #31cf52 100%);
    `}

    ${color === "red" &&
    css`
      background: #ff0120;
    `}

    ${color === "blue" &&
    css`
      background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
    `}

    ${color === "purple" &&
    css`
      background: #4c4094;
    `}
  `}
`;

interface Props {
  isOpen: boolean;
  close: () => void;
}

function FullScreenModal({ isOpen, close }: Props) {
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
        <NavHeader>
          <button onClick={close}>
            <Icon name="leftArrow" />
          </button>
          <Image
            src="/static_assets/images/olho-no-credito-logo.svg"
            alt="logo da olho no crédito"
            width="94"
            height="54"
          />
        </NavHeader>

        <Title>Olá! Tem certeza que deseja cancelar esse contrato?</Title>

        <Text>
          A partir do momento do cancelamento, você não poderá fazer mais
          consultas.
        </Text>
        <Text>
          Caso deseje um de nossos consultores pode entrar em contato com você
          para tratar do assunto!
        </Text>
        <ActionsContainer>
          <Button color="green" onClick={() => console.log("receive a call")}>
            Receber uma ligação
          </Button>
          <Button color="red" onClick={() => console.log("cancel contract")}>
            Cancelar
          </Button>
        </ActionsContainer>
      </ModalContent>
    </Overlay>
  );
}

export default FullScreenModal;
