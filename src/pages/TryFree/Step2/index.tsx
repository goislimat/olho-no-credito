import styled from "styled-components";

import { Button, Input } from "ui";
import { breakpoints } from "ui/theme";
import PageTemplate from "../components/PageTemplate";

const Form = styled.form`
  display: grid;
  row-gap: 16px;
`;

const DoubleColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
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

function TryFreeStep2() {
  return (
    <PageTemplate
      currentStep={2}
      stepTitle="Dados empresariais"
      showQueryResultInfo
    >
      <Form>
        <Input placeholder="CEP" />
        <Input placeholder="Endereço" />
        <DoubleColumnContainer>
          <Input placeholder="Número" />
          <Input placeholder="Complemento" />
        </DoubleColumnContainer>
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="Estado" />

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

export default TryFreeStep2;
