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
  margin: 40px 0 28px;

  ${breakpoints.desktop} {
    font-family: ${typography.inter};
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 2%;
    font-weight: 600;
    max-width: 453px;
    margin: 60px 0 28px;
  }
`;

const Form = styled.form`
  display: grid;
  row-gap: 30px;
  width: 100%;
  margin-bottom: 150px;

  button {
    margin-top: 40px;
  }

  p {
    text-align: center;
    font-family: ${typography.poppins};
    font-size: 15px;
    line-height: 22px;
    color: ${colors.green600};
    font-weight: 700;
    text-transform: uppercase;
  }

  ${breakpoints.desktop} {
    width: 428px;
    margin-bottom: 125px;

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

function Hero() {
  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Title>Recuperar senha</Title>

      <Form>
        <Input placeholder="Email" />
        <p>ou</p>
        <Input placeholder="CPF" />
        <Button
          background="blueGradient"
          padding="12px"
          uppercase
          onClick={() => {}}
        >
          Entrar
        </Button>
      </Form>

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
