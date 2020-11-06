import styled, { css } from "styled-components";

import { colors } from "ui/theme";

interface ButtonProps {
  uppercase?: true;
  background?: keyof typeof colors;
  padding?: string;
  squared?: true;
  rounded?: true;
  onClick: () => any;
}

interface Props extends ButtonProps {
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  padding: 0;
  border: none;
  background: none;
  font-size: 10px;
  line-height: 29px;
  color: ${colors.white};
  border-radius: 6px;
  outline: 0;

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${({ background }) =>
    background &&
    css`
      background: ${colors[background]};
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

  ${({ squared }) =>
    squared &&
    css`
      border-radius: 0;
    `}

    ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `}
`;

export default function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
