import styled, { css } from "styled-components";

import { breakpoints, colors } from "ui/theme";

interface ButtonProps {
  uppercase?: true;
  background?: keyof typeof colors;
  padding?: string;
  squared?: true;
  rounded?: true;
  onlyMobile?: true;
  onlyDesktop?: true;
  fullWidth?: true;
  cta?: true;
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
  font-weight: bold;
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

    ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

    ${({ cta }) =>
    cta &&
    css`
      font-size: 18px;
      line-height: 30px;
    `}

    ${({ onlyDesktop }) =>
    onlyDesktop &&
    css`
      display: none;

      ${breakpoints.desktop} {
        display: flex;
      }
    `}
    
    ${({ onlyMobile }) =>
    onlyMobile &&
    css`
      ${breakpoints.desktop} {
        display: none;
      }
    `}
`;

export default function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}