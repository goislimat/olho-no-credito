import styled from "styled-components";
import { colors } from "ui/theme";

const InputContainer = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 6px;
`;

const StyledInput = styled.input`
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
`;

interface Props {
  placeholder: string;
}

function Input({ ...props }: Props) {
  return (
    <InputContainer>
      <StyledInput {...props} />
    </InputContainer>
  );
}

export default Input;
