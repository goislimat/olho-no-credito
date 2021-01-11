import { ReactNode } from "react";
import styled from "styled-components";

const CustomLabel = styled.label`
  font-size: 15px;
  line-height: 26px;
  font-style: italic;
  color: #505050;

  span {
    display: inline-block;
    padding-left: 8px;
  }
`;

interface Props {
  id: string;
  label: string;
  children: ReactNode;
}

function Label({ id, label, children }: Props) {
  return (
    <div>
      <CustomLabel htmlFor={id}>
        <span>{label}</span>
        {children}
      </CustomLabel>
    </div>
  );
}

export default Label;
