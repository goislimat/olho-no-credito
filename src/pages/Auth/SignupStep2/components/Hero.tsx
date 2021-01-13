import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useFormik } from "formik";

import { MainHeroWithFigure } from "components";
import { breakpoints, colors, typography } from "ui/theme";
import { Button, Input, QuodLogo, Select, StepCounter } from "ui";
import { useSignup } from "pages/Auth/context/SignupContext";
import statesOfBrazil from "helpers/statesOfBrazil";
import { signupStep2Validation } from "helpers/validations/signupForm";
import { successApiRequest } from "mocks/apiRequests";
import { useToast } from "ui/Toast";

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

const StepContainer = styled.div`
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: ${colors.gray};
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 30px;
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

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
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
  const router = useRouter();
  const toast = useToast();
  const signup = useSignup();

  const {
    handleChange,
    handleSubmit,
    values: { zipCode, streetName, number, extra, neighborhood, city, state },
  } = useFormik({
    initialValues: {
      zipCode: "",
      streetName: "",
      number: "",
      extra: "",
      neighborhood: "",
      city: "",
      state: "",
    },
    validationSchema: signupStep2Validation,
    onSubmit: async function (values) {
      try {
        // TODO: replace this mock timeout for the actual api request
        const res = await successApiRequest(values);
        console.log(res);

        signup?.storeSignupInfo({ address: values });
        // TODO: replace this for the correct logged endpoint
        router.push("/");
      } catch (err) {
        console.log(err);

        toast?.error({
          title: "Informações incorretas",
        });
      }
    },
  });

  return (
    <MainHeroWithFigure removeImageOnMobile>
      <Title>Cadastre-se</Title>
      <Description>Para realizar suas consultas</Description>

      <StepContainer>
        <StepCounter numberOfSteps={2} currentActiveStep={2} />
      </StepContainer>

      <Form onSubmit={handleSubmit}>
        <Input
          id="zipCode"
          name="zipCode"
          type="text"
          label="CEP"
          placeholder="CEP"
          mask="zipCode"
          icon="filledLocationPin"
          onChange={handleChange}
          value={zipCode}
          hasError={false}
        />
        <Input
          id="streetName"
          name="streetName"
          type="text"
          label="Endereço"
          placeholder="Endereço"
          icon="filledLocationPin"
          onChange={handleChange}
          value={streetName}
          hasError={false}
        />
        <FormGroup>
          <Input
            id="number"
            name="number"
            type="text"
            label="Número"
            placeholder="Número"
            onChange={handleChange}
            value={number}
            hasError={false}
          />
          <Input
            id="extra"
            name="extra"
            type="text"
            label="Complemento"
            placeholder="Complemento"
            onChange={handleChange}
            value={extra}
            hasError={false}
          />
        </FormGroup>
        <Input
          id="neighborhood"
          name="neighborhood"
          type="text"
          label="Bairro"
          placeholder="Bairro"
          onChange={handleChange}
          value={neighborhood}
          hasError={false}
        />
        <Input
          id="city"
          name="city"
          type="text"
          label="Cidade"
          placeholder="Cidade"
          onChange={handleChange}
          value={city}
          hasError={false}
        />

        <Select
          id="state"
          name="state"
          label="Estado"
          placeholder="Estado"
          onChange={handleChange}
          value={state}
          values={statesOfBrazil.map(function ({ uf, name }) {
            return { value: uf, text: name };
          })}
        />

        <Button background="blueGradient" padding="12px" uppercase>
          Finalizar
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
