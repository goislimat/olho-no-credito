import styled, { css } from "styled-components";
import { typography } from "ui/theme";

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
  background: linear-gradient(
    139.78deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.79) 101.92%
  );
  border-radius: 24px;
  padding: 60px 24px;
  max-width: 390px;
`;

const Title = styled.p`
  font-family: ${typography.inter};
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  color: #686868;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-family: ${typography.roboto};
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: #686868;
  margin-bottom: 24px;
`;

const ActionsContainer = styled.div`
  display: grid;
  row-gap: 24px;
  margin-top: 48px;
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
  return (
    <Overlay role="button" onClick={close} isOpen={isOpen}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
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
          <Button color="green">Receber uma ligação</Button>
          <Button color="red">Cancelar</Button>
        </ActionsContainer>
      </ModalContent>
    </Overlay>
  );
}

export default FullScreenModal;
