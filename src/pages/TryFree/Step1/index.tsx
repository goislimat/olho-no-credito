import { useRouter } from "next/router";
import { useFormik } from "formik";
import styled from "styled-components";

import tryFreeStep1Validation from "helpers/validations/tryFreeStep1";
import { Button, Input } from "ui";
import { useToast } from "ui/Toast";
import PageTemplate from "../components/PageTemplate";
import { useTryFreeContext } from "../context/TryFreeContext";
import { successApiRequest } from "mocks/apiRequests";

const Form = styled.form`
  display: grid;
  row-gap: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
`;

function TryFreeStep1() {
  const router = useRouter();
  const toast = useToast();
  const tryFree = useTryFreeContext();

  const {
    handleChange,
    handleSubmit,
    values: { cnpj, phone },
    errors,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      cnpj: "",
      phone: "",
    },
    validationSchema: tryFreeStep1Validation,
    onSubmit: async function (values) {
      try {
        // TODO: if you're going to validate each step on backend,
        // you'll need to sendo those values to backend
        // otherwise, the tryFree.addInfo() will be able to keep the user info
        const res = await successApiRequest(values);
        console.log(res);

        tryFree?.addInfo(values);
        router.push("/teste-gratis/passo-2");
      } catch (err) {
        toast?.error({
          title: "Erro ao submeter dados",
          subtitle: "Tente novamente",
        });
      }
    },
  });

  return (
    <PageTemplate currentStep={1} stepTitle="Insira o CNPJ da sua empresa">
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

        <StyledButton
          background="blueGradient"
          padding="12px"
          uppercase
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Próximo
        </StyledButton>
      </Form>
    </PageTemplate>
  );
}

export default TryFreeStep1;
