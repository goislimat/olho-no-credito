import { useRouter } from "next/router";
import styled from "styled-components";
import { useFormik } from "formik";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input, QuodLogo } from "ui";
import passwordRecovery from "helpers/validations/passwordRecovery";
import { useToast } from "ui/Toast";
import { successApiRequest } from "mocks/apiRequests";
import { usePasswordRecovery } from "pages/Auth/context/PasswordRecoveryContext";

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

const isEmpty = (field: string): boolean => !field.trim();

function Hero() {
  const router = useRouter();
  const toast = useToast();
  const passwordRecovery = usePasswordRecovery();

  const {
    handleChange,
    handleSubmit,
    values: { email, cnpj },
    errors,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      cnpj: "",
    },
    validationSchema: passwordRecovery,
    onSubmit: async function (values) {
      if (isEmpty(values.email) && isEmpty(values.cnpj)) {
        toast?.error({
          title: "Informe email ou CNPJ",
        });
      }

      try {
        // TODO: replace this mock timeout for the actual api request
        // res may have the user email even if they fill only cnpj
        // if it's needed, the any could be replaced for the returned
        // structure. Suggested: { data: {email: "teste@email.com"} }
        const res: any = await successApiRequest(values);
        console.log(res);

        passwordRecovery?.storePasswordRecoveryInfo({
          ...values,
          email: res.data.email,
        });
        router.push("/recuperar-senha/confirmar");
      } catch (err) {
        toast?.error({
          title: "Dados inválidos",
          subtitle: "Tente novamente",
        });
      }
    },
  });

  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Title>Recuperar senha</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          icon="mail"
          onChange={handleChange}
          value={email}
          hasError={!!errors.email}
        />
        <p>ou</p>
        <Input
          id="cnpj"
          name="cnpj"
          type="text"
          label="CNPJ"
          placeholder="CNPJ"
          mask="cnpj"
          icon="creditCard"
          onChange={handleChange}
          value={cnpj}
          hasError={!!errors.cnpj}
        />
        <Button
          background="blueGradient"
          padding="12px"
          uppercase
          disabled={!isValid || isSubmitting}
        >
          Entrar
        </Button>
      </Form>

      <QuodLogo />
    </MainHeroWithFigure>
  );
}

export default Hero;
