import styled from "styled-components";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input, QuodLogo, StepCounter } from "ui";

const Title = styled.h1`
  font-family: ${typography.inter};
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  color: ${colors.green};
  margin: 40px 0 8px;

  ${breakpoints.desktop} {
    font-family: ${typography.inter};
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 2%;
    font-weight: 600;
    max-width: 453px;
    margin: 60px 0 8px;
  }
`;

const Description = styled.p`
  color: ${colors.gray};
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 30px;
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

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
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
      <Title>Cadastre-se</Title>
      <Description>Para realizar suas consultas</Description>

      <StepCounter numberOfSteps={2} currentActiveStep={2} />

      <Form>
        <Input placeholder="CEP" />
        <Input placeholder="Endereço" />
        <FormGroup>
          <Input placeholder="Número" />
          <Input placeholder="Complemento" />
        </FormGroup>
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="Estado" />
        <Button
          background="blueGradient"
          padding="12px"
          uppercase
          onClick={() => {}}
        >
          Finalizar
        </Button>
      </Form>
      <RememberPassword>
        Já é cadastrado? <a href="#">Clique aqui.</a>
      </RememberPassword>
      <QuodLogo />
    </MainHeroWithFigure>
  );
}

export default Hero;
