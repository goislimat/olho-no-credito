import { useFormik } from "formik";
import { successApiRequest } from "mocks/apiRequests";
import styled from "styled-components";

import { Button, Input } from "ui";
import { breakpoints, colors, typography } from "ui/theme";
import { useToast } from "ui/Toast";

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

const FormContainer = styled.form`
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
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
    },
    onSubmit: async function (values) {
      try {
        // TODO: call the api for sign newsletter
        const res = await successApiRequest(values);
        console.log(res);

        // TODO: toast de sucesso
      } catch (err) {
        toast?.error({
          title: "Algo deu errado!",
          subtitle: "Tente novamente",
        });
      }
    },
  });

  return (
    <Container>
      <Title>Cadastre-se para receber por e-mail mais informações</Title>
      <Description>
        Assine nossa newsletter e fique informado sobre tudo o que acontece no
        mercado
      </Description>

      <FormContainer onSubmit={formik.handleSubmit}>
        <InputsContainer>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Nome completo"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            hasError={!!formik.errors.fullName}
          />
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            hasError={!!formik.errors.email}
          />
        </InputsContainer>
        <Button type="submit" background="blueGradient">
          Assinar Newsletter
        </Button>
      </FormContainer>
    </Container>
  );
}

export default Newsletter;
