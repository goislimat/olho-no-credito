import { ReactNode } from "react";
import styled, { css } from "styled-components";

const CustomLabel = styled.label<{ isWhite?: boolean }>`
  ${({ isWhite }) => css`
    font-size: 15px;
    line-height: 26px;
    font-style: italic;
    color: #505050;

    ${isWhite &&
    css`
      color: white;
    `}

    span {
      display: inline-block;
      padding-left: 8px;
    }
  `}
`;

interface Props {
  id: string;
  label: string;
  isWhite?: boolean;
  children: ReactNode;
}

function Label({ id, label, isWhite, children }: Props) {
  return (
    <div>
      <CustomLabel htmlFor={id} isWhite={isWhite}>
        <span>{label}</span>
        {children}
      </CustomLabel>
    </div>
  );
}

export default Label;
