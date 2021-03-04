import styled, { css } from "styled-components";
import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  margin: 80px 0;

  ${breakpoints.desktop} {
    background: white;
    box-shadow: 5px 3px 25px rgba(0, 0, 0, 0.15);
    margin: 80px 120px;
    padding: 80px 280px;
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  font-family: ${typography.inter};
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  color: #686868;
  margin-bottom: 32px;

  ${breakpoints.desktop} {
    font-size: 30px;
    line-height: 36px;
  }
`;

const Description = styled.p`
  font-family: ${typography.roboto};
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #686868;
  margin: 0 24px 60px;

  ${breakpoints.desktop} {
    font-size: 21px;
    line-height: 26px;
  }
`;

const ActionsContainer = styled.div`
  margin: 0 24px;
  display: grid;
  row-gap: 24px;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    padding: 0 48px;
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

    ${breakpoints.desktop} {
      height: 43px;
      font-family: ${typography.inter};
      font-size: 13px;
      font-weight: 600;
      line-height: 29px;
    }

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

function InfoContainer() {
  return (
    <Content>
      <Title>A Olhonocred zela pelo sigilo dos seus dados</Title>
      <Description>
        Deseja excluir permanentemente seu cadastro? Não será possível recuperar
        os dados posteriormente.
      </Description>
      <ActionsContainer>
        <Button color="red" onClick={() => {}}>
          Excluir conta
        </Button>
        <Button color="blue" onClick={() => {}}>
          Voltar
        </Button>
      </ActionsContainer>
    </Content>
  );
}

export default InfoContainer;
