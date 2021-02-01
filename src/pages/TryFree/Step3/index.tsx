import { useFormik } from "formik";
import { useRouter } from "next/router";
import styled from "styled-components";

import { tryFreeStep3Validation } from "helpers/validations/tryFree";
import { successApiRequest } from "mocks/apiRequests";
import { Button, Input } from "ui";
import { breakpoints } from "ui/theme";
import { useToast } from "ui/Toast";
import PageTemplate from "../components/PageTemplate";
import { useTryFreeContext } from "../context/TryFreeContext";

const Form = styled.form`
  display: grid;
  row-gap: 16px;
`;

const ButtonContainer = styled.div`
  display: grid;
  row-gap: 25px;
  margin-top: 30px;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
  }
`;

function TryFreeStep3() {
  const router = useRouter();
  const toast = useToast();
  const tryFree = useTryFreeContext();

  const {
    handleSubmit,
    handleChange,
    values: {
      fullName,
      cpf,
      birthday,
      email,
      emailConfirmation,
      password,
      passwordConfirmation,
    },
    errors,
  } = useFormik({
    initialValues: {
      fullName: "",
      cpf: "",
      birthday: "",
      email: "",
      emailConfirmation: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: tryFreeStep3Validation,
    onSubmit: async function (values) {
      try {
        // TODO: replace the api call here for an actual implementation
        // if needed
        const res = await successApiRequest(values);
        console.log(res);

        tryFree?.addInfo({ personalInfo: values });
        router.push("/test-gratis/passo-4");
      } catch (err) {
        toast?.error({
          title: "Dados inválidos",
          subtitle: "Tente novamente",
        });
      }
    },
  });

  function goBack() {
    // router.back();
  }

  return (
    <PageTemplate
      currentStep={3}
      stepTitle="Dados pessoais"
      showQueryResultInfo
    >
      <Form onSubmit={handleSubmit}>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          label="Nome completo"
          placeholder="Nome completo"
          icon="filledPerson"
          onChange={handleChange}
          value={fullName}
          hasError={!!errors.fullName}
        />
        <Input
          id="cpf"
          name="cpf"
          type="text"
          label="CPF"
          placeholder="CPF"
          mask="cpf"
          icon="creditCard"
          onChange={handleChange}
          value={cpf}
          hasError={!!errors.cpf}
        />
        <Input
          id="birthday"
          name="birthday"
          type="text"
          label="Data de nascimento"
          placeholder="Data de nascimento"
          mask="birthday"
          onChange={handleChange}
          value={birthday}
          hasError={!!errors.birthday}
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
          id="emailConfirmation"
          name="emailConfirmation"
          type="email"
          label="Confirmar email"
          placeholder="Confirmar email"
          icon="filledMail"
          onChange={handleChange}
          value={emailConfirmation}
          hasError={!!errors.emailConfirmation}
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

        <ButtonContainer>
          <Button
            background="greenGradient"
            uppercase
            padding="12px"
            type="button"
            onClick={goBack}
          >
            Voltar
          </Button>
          <Button
            background="blueGradient"
            uppercase
            padding="12px"
            type="submit"
          >
            Próximo
          </Button>
        </ButtonContainer>
      </Form>
    </PageTemplate>
  );
}

export default TryFreeStep3;
