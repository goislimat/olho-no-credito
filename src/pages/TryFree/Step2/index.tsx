import { useFormik } from "formik";
import statesOfBrazil from "helpers/statesOfBrazil";
import { signupStep2Validation } from "helpers/validations/signupForm";
import { successApiRequest } from "mocks/apiRequests";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Button, Input, Select } from "ui";
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

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
`;

function TryFreeStep2() {
  const router = useRouter();
  const toast = useToast();
  const tryFree = useTryFreeContext();

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
        // TODO: once more, if you're going to validate each step
        // do this right here
        const res = await successApiRequest(values);
        console.log(res);

        tryFree?.addInfo({ address: values });
        router.push("/teste-gratis/passo-3");
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
      currentStep={2}
      stepTitle="Dados empresariais"
      showQueryResultInfo
    >
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

export default TryFreeStep2;
