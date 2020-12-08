import Link from "next/link";
import styled from "styled-components";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input, QuodLogo } from "ui";

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
    margin: 100px 0 60px;
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
    margin-bottom: 40px;

    button {
      margin-top: 20px;
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
        Esqueceu sua senha?{" "}
        <Link href="/recuperar-senha">
          <a>Clique aqui.</a>
        </Link>
      </RememberPassword>
      <QuodLogo />
    </MainHeroWithFigure>
  );
}

export default Hero;
