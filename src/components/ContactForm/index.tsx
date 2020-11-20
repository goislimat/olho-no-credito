import styled from "styled-components";
import { useFormik } from "formik";

import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input } from "ui";

const Container = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: block;
  }
`;

const Title = styled.h2`
  font-family: ${typography.inter};
  font-weight: 600;
  font-size: 45px;
  line-height: 54px;
  color: ${colors.white};
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5%;
  margin-bottom: 32px;
  color: ${colors.blue600};
`;

const Form = styled.form`
  display: grid;
  row-gap: 24px;
`;

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: function (values) {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Title>Fale Conosco</Title>
      <Description>Preencha o formulário e aguarde o contato</Description>

      <Form>
        <Input placeholder="Nome completo" />
        <Input placeholder="Email*" />
        <Input placeholder="Telefone*" />
        <Input as="textarea" placeholder="Mensagem*" height="146px" />

        <Button
          type="submit"
          roboto
          background="blueGradient"
          padding="12px"
          uppercase
          font-weight="700"
        >
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
