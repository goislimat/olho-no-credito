import styled from "styled-components";
import { useFormik } from "formik";

import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input } from "ui";
import contactFormValidation from "helpers/validations/contactForm";
import { successApiRequest } from "mocks/apiRequests";
import { useToast } from "ui/Toast";

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
  const toast = useToast();

  const {
    handleSubmit,
    handleChange,
    values: { fullName, email, phone, message },
    errors,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactFormValidation,
    onSubmit: async function (values) {
      try {
        // TODO: replace this for an actual api call
        const res = await successApiRequest(values);
        console.log(res);

        // TODO: add a success toast here
      } catch (err) {
        toast?.error({
          title: "Erro ao enviar mensagem",
          subtitle: "Tente novamente",
        });
      }
    },
  });

  return (
    <Container>
      <Title>Fale Conosco</Title>
      <Description>Preencha o formulário e aguarde o contato</Description>

      <Form onSubmit={handleSubmit}>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Nome completo"
          value={fullName}
          onChange={handleChange}
          hasError={!!errors.fullName}
          whiteBG
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email*"
          value={email}
          onChange={handleChange}
          hasError={!!errors.email}
          whiteBG
        />
        <Input
          id="phone"
          name="phone"
          type="text"
          placeholder="Telefone*"
          mask="phone"
          value={phone}
          onChange={handleChange}
          hasError={!!errors.phone}
          whiteBG
        />
        <Input
          id="message"
          name="message"
          type="text"
          as="textarea"
          placeholder="Mensagem*"
          value={message}
          onChange={handleChange}
          hasError={!!errors.message}
          whiteBG
        />

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
