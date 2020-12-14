import styled, { css } from "styled-components";
import { Icon } from "ui";
import icons from "ui/Icon/icons";
import { colors } from "ui/theme";

const InputContainer = styled.div<{ hasError: boolean }>`
  border: 0.5px solid ${colors.gray};
  border-radius: 6px;
  display: flex;
  padding: 20px;

  ${({ hasError }) => css`
    ${hasError &&
    css`
      border-color: #ff0120;

      svg path {
        fill: #ff0120;
      }
    `}
  `}
`;

const CustomInput = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  width: 100%;
  resize: none;
`;

interface FormProps {
  as?: "textarea";
  placeholder: string;
  icon?: keyof typeof icons;
  hasError: boolean;
  [propName: string]: any;
}

function Input({ as, icon, hasError, ...props }: FormProps) {
  return (
    <InputContainer hasError={hasError}>
      <CustomInput as={as} {...props} />
      {icon && <Icon name={icon} />}
    </InputContainer>
  );
}

export default Input;
