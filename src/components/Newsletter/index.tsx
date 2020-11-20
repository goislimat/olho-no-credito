import styled from "styled-components";

import { Button, Input } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const Container = styled.section`
  display: none;

  ${breakpoints.desktop} {
    display: block;
    max-width: 1224px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-family: ${typography.inter};
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: ${colors.gray};
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5%;
  color: ${colors.gray};
  margin-bottom: 32px;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 142px;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

function Newsletter() {
  return (
    <Container>
      <Title>Cadastre-se para receber por e-mail mais informações</Title>
      <Description>
        Assine nossa newsletter e fique informado sobre tudo o que acontece no
        mercado
      </Description>

      <FormContainer>
        <InputsContainer>
          <Input placeholder="Nome completo" />
          <Input placeholder="Email" />
        </InputsContainer>
        <Button onClick={() => {}} background="blueGradient" roboto>
          Assinar Newsletter
        </Button>
      </FormContainer>
    </Container>
  );
}

export default Newsletter;
