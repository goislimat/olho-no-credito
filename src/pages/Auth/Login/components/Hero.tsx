import Image from "next/image";
import styled from "styled-components";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input } from "ui";

const Title = styled.h1`
  font-family: ${typography.inter};
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  color: ${colors.green};
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

const Form = styled.form`
  display: grid;
  row-gap: 30px;
  width: 100%;
  margin-bottom: 32px;

  button {
    margin-top: 40px;
  }

  ${breakpoints.desktop} {
    width: 428px;
    margin-bottom: 110px;

    button {
      margin-top: 20px;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  p {
    font-family: ${typography.inter};
    text-transform: uppercase;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 1px;
    font-weight: 600;
    color: ${colors.blue300};
  }

  div {
    width: 113px;
  }

  ${breakpoints.desktop} {
    div {
      width: 191px;
    }
  }
`;

const RememberPassword = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: ${colors.gray400};
  margin-bottom: 100px;

  a {
    color: ${colors.green};
    text-decoration: none;
  }
`;

function Hero() {
  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Title>Acesse sua conta aqui</Title>

      <Form>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Button
          background="blueGradient"
          padding="12px"
          uppercase
          onClick={() => {}}
        >
          Entrar
        </Button>
      </Form>

      <RememberPassword>
        Esqueceu sua senha? <a href="#">Clique aqui.</a>
      </RememberPassword>

      <LogoContainer>
        <p>Distribuidor autorizado</p>
        <div>
          <Image
            src="/static_assets/images/quod.svg"
            alt="quod logo"
            width="191"
            height="103"
          />
        </div>
      </LogoContainer>
    </MainHeroWithFigure>
  );
}

export default Hero;
