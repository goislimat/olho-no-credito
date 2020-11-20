import styled, { css } from "styled-components";
import { colors } from "ui/theme";

interface InputStylingProps {
  [propName: string]: any;
}

const InputContainer = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 6px;
`;

const StyledInput = styled.input<InputStylingProps>`
  border: none;
  outline: none;
  display: block;
  width: 100%;
  font-size: 15px;
  line-height: 18px;
  padding: 16px;
  color: ${colors.gray300};
  border-radius: 6px;

  ::placeholder {
    color: ${colors.gray300};
  }

  resize: none;

  ${(props) => css`
    ${props}
  `}
`;

interface Props extends InputStylingProps {
  as?: "textarea";
  placeholder: string;
}

function Input({ as, ...props }: Props) {
  return (
    <InputContainer>
      <StyledInput as={as} {...props} />
    </InputContainer>
  );
}

export default Input;
