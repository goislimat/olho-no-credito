import styled, { css } from "styled-components";
import InputMask, { Props as InputMaskProps } from "react-input-mask";

import { Icon, Label } from "ui";
import icons from "ui/Icon/icons";
import { colors } from "ui/theme";
import masks from "./masks";
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

const CustomInput = styled(InputMask)<InputMaskProps>`
  border: 0;
  outline: 0;
  background: transparent;
  width: 100%;
  resize: none;
`;

interface FormProps {
  as?: "textarea";
  placeholder: string;
  label?: string;
  icon?: keyof typeof icons;
  mask?: keyof typeof masks;
  hasError: boolean;
  [propName: string]: any;
}

function Input({ as, icon, label, mask, hasError, ...props }: FormProps) {
  function renderInput() {
    return (
      <InputContainer hasError={hasError}>
        <CustomInput
          mask={mask ? masks[mask](props.value) : ""}
          maskPlaceholder={null}
          as={as}
          {...props}
        />
        {icon && <Icon name={icon} />}
      </InputContainer>
    );
  }

  if (label) {
    return (
      <Label id={props.id} label={label}>
        {renderInput()}
      </Label>
    );
  }

  return renderInput();
}

export default Input;
