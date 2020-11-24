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

      <QuodLogo />
    </MainHeroWithFigure>
  );
}

export default Hero;
