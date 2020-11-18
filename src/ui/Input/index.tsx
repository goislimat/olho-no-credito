import styled from "styled-components";
import { colors } from "ui/theme";

const InputContainer = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  margin: 50px 20px;
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

  ::placeholder {
    color: ${colors.gray300};
  }
`;

function Input() {
  return (
    <InputContainer>
      <StyledInput placeholder="Razão Social" />
    </InputContainer>
  );
}

export default Input;
