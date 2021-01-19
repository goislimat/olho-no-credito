import styled, { css } from "styled-components";
import InputMask, { Props as InputMaskProps } from "react-input-mask";

import { Icon, Label } from "ui";
import icons from "ui/Icon/icons";
import { colors } from "ui/theme";
import masks from "./masks";

interface InputContainerProps {
  hasError: boolean;
  isWhite?: boolean;
  whiteBG?: boolean;
  round?: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
  ${({ hasError, isWhite, whiteBG, round }) => css`
    border: 0.5px solid ${isWhite ? colors.white : colors.gray};
    border-radius: 6px;
    display: flex;
    padding: 20px;

    ${hasError &&
    css`
      border-color: #ff0120;

      svg path {
        fill: #ff0120;
      }
    `}

    ${whiteBG &&
    css`
      background-color: white;
    `}

    ${round &&
    css`
      border-radius: 75px;
      padding: 16px 40px;
    `}
  `}
`;

const CustomInput = styled(InputMask)<InputMaskProps & { isWhite?: boolean }>`
  ${({ isWhite }) => css`
    border: 0;
    outline: 0;
    background: transparent;
    width: 100%;
    resize: none;

    ${isWhite &&
    css`
      ::placeholder {
        color: white;
      }
    `}
  `}
`;

interface FormProps {
  as?: "textarea";
  placeholder: string;
  label?: string;
  icon?: keyof typeof icons;
  mask?: keyof typeof masks;
  hasError: boolean;
  isWhite?: boolean;
  whiteBG?: boolean;
  round?: boolean;
  [propName: string]: any;
}

function Input({
  as,
  icon,
  label,
  mask,
  hasError,
  isWhite,
  whiteBG,
  round,
  ...props
}: FormProps) {
  function renderInput() {
    return (
      <InputContainer
        hasError={hasError}
        isWhite={isWhite}
        whiteBG={whiteBG}
        round={round}
      >
        <CustomInput
          mask={mask ? masks[mask](props.value) : ""}
          maskPlaceholder={null}
          as={as}
          isWhite={isWhite}
          {...props}
        />
        {icon && <Icon name={icon} />}
      </InputContainer>
    );
  }

  if (label) {
    return (
      <Label id={props.id} label={label} isWhite={isWhite}>
        {renderInput()}
      </Label>
    );
  }

  return renderInput();
}

export default Input;
