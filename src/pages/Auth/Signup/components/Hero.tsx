import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useFormik } from "formik";

import { MainHeroWithFigure } from "components";
import { successApiRequest } from "mocks/apiRequests";
import { Button, Input, QuodLogo, StepCounter } from "ui";
import { breakpoints, colors, typography } from "ui/theme";
import { useToast } from "ui/Toast";
import { useSignup } from "pages/Auth/context/SignupContext";
import signupFormValidation from "helpers/validations/signupForm";

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

const StepContainer = styled.div`
  margin-bottom: 12px;
`;

const Form = styled.form`
  z-index: 3;
  display: grid;
  row-gap: 12px;
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
  const [submissionFailed, setSubmissionFailed] = useState<boolean>(false);

  const router = useRouter();
  const toast = useToast();
  const signup = useSignup();

  const {
    handleChange,
    handleSubmit,
    values: { cnpj, phone, email, password, passwordConfirmation },
    setFieldValue,
    errors,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      cnpj: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: signupFormValidation,
    onSubmit: async function (values) {
      try {
        console.log("beginning");
        setSubmissionFailed(false);
        console.log("set submitting");
        // TODO: replace this mock timeout for the actual api request
        const res = await successApiRequest(values);
        console.log(res);

        signup?.storeSignupInfo(values);
        console.log("stored info");
        router.push("/entrar/criar-conta-passo-2");
        console.log("navigated");
      } catch (err) {
        console.log(err);

        console.log("errored");

        setFieldValue("password", "");
        setFieldValue("passwordConfirmation", "");

        console.log("cleared fields");

        toast?.error({
          title: "Senhas inválidas",
        });
        setSubmissionFailed(true);
      }
    },
  });

  console.log(errors);

  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Title>Cadastre-se</Title>
      <Description>Para realizar suas consultas</Description>

      <StepContainer>
        <StepCounter numberOfSteps={2} currentActiveStep={1} />
      </StepContainer>

      <Form onSubmit={handleSubmit}>
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
        <Input
          id="phone"
          name="phone"
          type="text"
          label="Telefone"
          placeholder="Telefone"
          mask="phone"
          icon="filledPhone"
          onChange={handleChange}
          value={phone}
          hasError={!!errors.phone}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          icon="filledMail"
          onChange={handleChange}
          value={email}
          hasError={!!errors.email}
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="Senha"
          icon="padlock"
          onChange={handleChange}
          value={password}
          hasError={!!errors.password}
        />
        <Input
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          label="Confirmar senha"
          placeholder="Confirmar senha"
          icon="padlock"
          onChange={handleChange}
          value={passwordConfirmation}
          hasError={!!errors.passwordConfirmation}
        />

        <Button
          background="blueGradient"
          padding="12px"
          uppercase
          disabled={!isValid || isSubmitting}
        >
          Próximo
        </Button>
      </Form>

      <RememberPassword>
        Já é cadastrado?{" "}
        <Link href="/entrar/login">
          <a>Clique aqui.</a>
        </Link>
      </RememberPassword>

      <QuodLogo />
    </MainHeroWithFigure>
  );
}

export default Hero;
