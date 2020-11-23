import Image from "next/image";
import styled from "styled-components";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button } from "ui";

const Title = styled.h1`
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  font-weight: 400;
  color: ${colors.gray};
  margin: 80px 0 50px;

  ${breakpoints.desktop} {
    font-family: ${typography.inter};
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 2%;
    font-weight: 600;
    max-width: 453px;
    margin: 160px 0 60px;
  }
`;

const Greetings = styled.span`
  ::before {
    content: "Olá";
    display: block;
    font-family: ${typography.inter};
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 2%;
    font-weight: 600;
    color: ${colors.green400};
    margin-bottom: 20px;
  }

  ${breakpoints.desktop} {
    ::before {
      content: "Olá,";
      display: inline;
      color: inherit;
    }
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  row-gap: 30px;
  width: 100%;

  ${breakpoints.desktop} {
    width: 428px;
    margin-bottom: 110px;
  }
`;

const LogoContainer = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-family: ${typography.inter};
      text-transform: uppercase;
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 1px;
      font-weight: 600;
      color: ${colors.blue300};
    }
  }
`;

function Hero() {
  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Title>
        <Greetings /> para começar seu atendimento escolha uma opção
      </Title>

      <ButtonContainer>
        <Button background="blueGradient" padding="16px" onClick={() => {}}>
          Já sou cliente
        </Button>
        <Button background="blueGradient" padding="16px" onClick={() => {}}>
          Preciso de um cadastro
        </Button>
      </ButtonContainer>

      <LogoContainer>
        <p>Distribuidor autorizado</p>
        <Image
          src="/static_assets/images/quod.svg"
          alt="quod logo"
          width="191"
          height="103"
        />
      </LogoContainer>
    </MainHeroWithFigure>
  );
}

export default Hero;
