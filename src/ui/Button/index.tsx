import styled, { css } from "styled-components";

import { breakpoints, colors, typography } from "ui/theme";

interface Props {
  background?: keyof typeof colors;
  fontSize?: "small" | "medium";
  roboto?: true;
  rounded?: true;
  uppercase?: true;
  withShadow?: true;
  onClick: () => void;
  [propName: string]: any;
}

const Button = styled.button<Props>`
  ${({
    background,
    fontSize,
    roboto,
    rounded,
    uppercase,
    withShadow,
    ...props
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: ${colors.white};
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
    font-family: ${typography.inter};
    font-size: 18px;
    line-height: 29px;

    ${background &&
    `
      background: ${colors[background]};
    `}

    ${fontSize === "small" &&
    `
      font-size: 12px;
      line-height: 14px;
    `}

    ${fontSize === "medium" &&
    `
      font-size: 15px;
      line-height: 17px;
    `}

    ${roboto &&
    `
      font-family: ${typography.roboto};
    `}

    ${rounded &&
    `
      border-radius: 50%;
    `}

    ${uppercase &&
    `
      text-transform: uppercase;
    `}

    ${withShadow &&
    `
      box-shadow: 6px 6px 15px rgba(7, 25, 110, 0.24);
    `}

    ${props}
  `}
`;

export default Button;
