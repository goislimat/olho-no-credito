import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input, QuodLogo } from "ui";
import { useFormik } from "formik";
import loginForm from "helpers/validations/loginForm";
import { useState } from "react";
import { successApiRequest, failApiRequest } from "mocks/apiRequests";
import { useToast } from "ui/Toast";

const Title = styled.h1`
  font-family: ${typography.inter};
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  color: ${colors.green};
  margin: 80px 0 50px;

  ${breakpoints.desktop} {
    font-family: ${typography.inter};
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 2%;
    font-weight: 600;
    max-width: 453px;
    margin: 100px 0 60px;
  }
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

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    isSubmitting,
    setFieldValue,
    values: { email, password },
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginForm,
    onSubmit: async function (values) {
      try {
        setSubmissionFailed(false);

        // TODO: replace this mock timeout for the actual api request
        const res = await successApiRequest(values);
        console.log(res);
        router.push("/dashboard");
      } catch (err) {
        console.log(err);
        setFieldValue("password", "");
        toast?.error({
          title: "Email e senha inválidos",
          subtitle: "Se preciso utilize a recuperação de senha",
        });
        setSubmissionFailed(true);
      }
    },
  });

  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Title>Acesse sua conta aqui</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          type="email"
          icon="filledMail"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
          hasError={submissionFailed}
        />
        <Input
          id="password"
          name="password"
          type="password"
          icon="padlock"
          placeholder="Senha"
          onChange={handleChange}
          onBlur={handleBlur}
          value={password}
          hasError={submissionFailed}
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
      <RememberPassword>
        Esqueceu sua senha?{" "}
        <Link href="/recuperar-senha">
          <a>Clique aqui.</a>
        </Link>
      </RememberPassword>
      <QuodLogo />
    </MainHeroWithFigure>
  );
}

export default Hero;
