import Image from "next/image";
import styled from "styled-components";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input } from "ui";
import { useFormik } from "formik";
import resetPasswordValidation from "helpers/validations/resetPassword";
import { useRouter } from "next/router";
import { useToast } from "ui/Toast";
import { successApiRequest } from "mocks/apiRequests";

const Title = styled.h1`
  font-family: ${typography.inter};
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  color: ${colors.white};
  margin: 62px 0 28px;

  ${breakpoints.desktop} {
    font-family: ${typography.inter};
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 2%;
    font-weight: 600;
    max-width: 453px;
    margin: 130px 0 28px;
  }
`;

const Form = styled.form`
  display: grid;
  row-gap: 30px;
  width: 100%;
  margin-bottom: 150px;

  button {
    margin-top: 172px;
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
      margin-top: 50px;
    }
  }
`;

function Hero() {
  const router = useRouter();
  const toast = useToast();

  const {
    handleSubmit,
    handleChange,
    values: { password, passwordConfirmation },
    errors,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: resetPasswordValidation,
    onSubmit: async function (values) {
      try {
        // TODO: replace for an actual api call
        const res = await successApiRequest(values);
        console.log(res);

        router.push("/recuperar-senha/sucesso");
      } catch (err) {
        toast?.error({
          title: "Erro ao definir nova senha",
        });
      }
    },
  });

  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Image
        src="/static_assets/images/olho-no-credito-logo-branco.svg"
        alt="olho no crédito logo"
        width="155"
        height="89"
      />

      <Title>Redefinir senha</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="Senha"
          icon="whitePadlock"
          isWhite
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
          icon="whitePadlock"
          isWhite
          onChange={handleChange}
          value={passwordConfirmation}
          hasError={!!errors.passwordConfirmation}
        />

        <Button
          background="blueGradient"
          padding="12px"
          uppercase
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Recuperar
        </Button>
      </Form>
    </MainHeroWithFigure>
  );
}

export default Hero;
