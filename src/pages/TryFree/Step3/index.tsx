import styled from "styled-components";

import { Button, Input } from "ui";
import { breakpoints } from "ui/theme";
import PageTemplate from "../components/PageTemplate";

const Form = styled.form`
  display: grid;
  row-gap: 16px;
`;

const ButtonContainer = styled.div`
  display: grid;
  row-gap: 25px;
  margin-top: 30px;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }
`;

function TryFreeStep3() {
  return (
    <PageTemplate
      currentStep={3}
      stepTitle="Dados pessoais"
      showQueryResultInfo
    >
      <Form>
        <Input placeholder="Nome completo" />
        <Input placeholder="CPF" />
        <Input placeholder="Data de nascimento" />
        <Input placeholder="Email" />
        <Input placeholder="Confirmar email" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirmar senha" />

        <ButtonContainer>
          <Button
            background="greenGradient"
            uppercase
            padding="12px"
            onClick={() => {}}
          >
            Voltar
          </Button>
          <Button
            background="blueGradient"
            uppercase
            padding="12px"
            onClick={() => {}}
          >
            Próximo
          </Button>
        </ButtonContainer>
      </Form>
    </PageTemplate>
  );
}

export default TryFreeStep3;
