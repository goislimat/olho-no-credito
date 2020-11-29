import styled from "styled-components";

import { Button, Input } from "ui";
import PageTemplate from "../components/PageTemplate";

const Form = styled.div`
  display: grid;
  row-gap: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
`;

function TryFreeStep1() {
  return (
    <PageTemplate currentStep={1} stepTitle="Insira o CNPJ da sua empresa">
      <Form>
        <Input placeholder="CNPJ" />
        <Input placeholder="Telefone" />

        <StyledButton
          background="blueGradient"
          padding="12px"
          width="100%"
          onClick={() => {}}
        >
          Entrar
        </StyledButton>
      </Form>
    </PageTemplate>
  );
}

export default TryFreeStep1;
