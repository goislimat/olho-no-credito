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

const Stepper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    font-family: ${typography.inter};
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;
    color: ${colors.gray600};
  }

  .active {
    color: ${colors.green};
  }
`;

const ConnectLine = styled.div`
  width: 30px;
  border-bottom: 1px solid ${colors.gray100};
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

      <Stepper>
        <span>1</span>
        <ConnectLine />
        <span className="active">2</span>
      </Stepper>

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
