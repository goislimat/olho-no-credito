import { useFormik } from "formik";
import personalData from "helpers/validations/personalData";
import styled, { css } from "styled-components";
import { Input } from "ui";

import { breakpoints, typography } from "ui/theme";

const Content = styled.div`
  grid-area: queries;
  box-shadow: 5px 3px 25px rgba(0, 0, 0, 0.15);
  background: white;
  margin-top: 54px;
  padding: 52px 32px;
  border-radius: 10px;

  ${breakpoints.desktop} {
    display: grid;
    margin: 0;
  }
`;

const Title = styled.h1`
  font-family: ${typography.inter};
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  color: #6a6a6a;
  margin-bottom: 44px;
`;

const FormContainer = styled.div`
  display: grid;
  row-gap: 13px;
  margin-bottom: 40px;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 72px;
  }
`;

const ActionsContainer = styled.div`
  display: grid;
  row-gap: 26px;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 21px;
  }
`;

const HiddenContainer = styled.div`
  display: none;

  ${breakpoints.desktop} {
    display: block;
  }
`;

interface ButtonProps {
  color: "green" | "red" | "blue" | "purple";
}

const Button = styled.button<ButtonProps>`
  ${({ color }) => css`
    display: grid;
    place-content: center center;
    width: 100%;
    height: 54px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    cursor: pointer;

    font-family: ${typography.roboto};
    font-size: 18px;
    font-weight: 700;
    line-height: 29px;
    color: white;

    ${breakpoints.desktop} {
      height: 43px;
      font-family: ${typography.inter};
      font-size: 13px;
      font-weight: 600;
      line-height: 29px;
    }

    ${color === "green" &&
    css`
      background: linear-gradient(180deg, #69ed47 0%, #31cf52 100%);
    `}

    ${color === "red" &&
    css`
      background: #ff0120;
    `}

    ${color === "blue" &&
    css`
      background: linear-gradient(180deg, #1792f2 0%, #226df3 100%);
    `}

    ${color === "purple" &&
    css`
      background: #4c4094;
    `}
  `}
`;

function PersonalDataForm() {
  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      fullName: "",
      cnpj: "",
      state: "",
      phone: "",
      email: "",
      password: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    validationSchema: personalData,
    onSubmit: function (values) {
      // TODO: do the request here
      console.log(values);
    },
  });

  return (
    <Content>
      <Title>A Olho no Crédito zela pelo sigilo dos seus dados</Title>
      <FormContainer>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          label="Nome completo"
          placeholder="Nome completo"
          icon="filledPerson"
          value={values.fullName}
          onChange={handleChange}
          hasError={!!errors.fullName}
        />
        <Input
          id="cnpj"
          name="cnpj"
          type="text"
          label="CNPJ"
          placeholder="CNPJ"
          icon="creditCard"
          mask="cnpj"
          value={values.cnpj}
          onChange={handleChange}
          hasError={!!errors.cnpj}
        />
        <Input
          id="phone"
          name="phone"
          type="text"
          label="Telefone"
          placeholder="Telefone"
          icon="filledPhone"
          mask="phone"
          value={values.phone}
          onChange={handleChange}
          hasError={!!errors.phone}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          icon="mail"
          value={values.email}
          onChange={handleChange}
          hasError={!!errors.email}
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="Senha"
          icon="padlock"
          value={values.password}
          onChange={handleChange}
          hasError={!!errors.password}
        />
        <Input
          id="newPassword"
          name="newPassword"
          type="password"
          label="Digite a nova senha"
          placeholder="Digite a nova senha"
          icon="padlock"
          value={values.newPassword}
          onChange={handleChange}
          hasError={!!errors.newPassword}
        />
        <Input
          id="newPasswordConfirmation"
          name="newPasswordConfirmation"
          type="password"
          label="Repita a nova senha"
          placeholder="Repita a nova senha"
          icon="padlock"
          value={values.newPasswordConfirmation}
          onChange={handleChange}
          hasError={!!errors.newPasswordConfirmation}
        />
      </FormContainer>
      <ActionsContainer>
        <HiddenContainer />
        <Button color="red" onClick={() => {}}>
          Excluir conta
        </Button>
        <Button color="blue" onClick={() => handleSubmit()}>
          Atualizar
        </Button>
        <Button color="purple" onClick={() => {}}>
          Downloads de dados
        </Button>
      </ActionsContainer>
    </Content>
  );
}

export default PersonalDataForm;
