import { ReactNode } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";

import { breakpoints, colors, typography } from "ui/theme";

interface Props {
  background?: keyof typeof colors;
  fontSize?: "small" | "medium";
  roboto?: true;
  rounded?: true;
  uppercase?: true;
  withShadow?: true;
  onlyMobile?: true;
  onlyDesktop?: true;
  [propName: string]: any;
}

interface DefaultButtonProps {
  children: ReactNode;
}

interface LinkButtonProps extends DefaultButtonProps {
  link: true;
  href: string;
}
interface ButtonProps extends DefaultButtonProps {
  onClick: () => void;
}

function CustomButton({
  link,
  href,
  children,
  ...props
}: LinkButtonProps | Props): JSX.Element;
function CustomButton({
  onClick,
  children,
  ...props
}: ButtonProps | Props): JSX.Element;
function CustomButton({
  link,
  href,
  onClick,
  children,
  ...props
}: any): JSX.Element {
  if (link) {
    return (
      <Link href={href} passHref>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}

const Button = styled(CustomButton)<Props>`
  ${({
    background,
    fontSize,
    roboto,
    rounded,
    uppercase,
    withShadow,
    onlyMobile,
    onlyDesktop,
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
    text-decoration: none;
    text-align: center;

    ${background &&
    css`
      background: ${colors[background]};
    `}

    ${fontSize === "small" &&
    css`
      font-size: 12px;
      line-height: 14px;
    `}

    ${fontSize === "medium" &&
    css`
      font-size: 15px;
      line-height: 17px;
    `}

    ${roboto &&
    css`
      font-family: ${typography.roboto};
    `}

    ${rounded &&
    css`
      border-radius: 50%;
    `}

    ${uppercase &&
    css`
      text-transform: uppercase;
    `}

    ${withShadow &&
    css`
      box-shadow: 6px 6px 15px rgba(7, 25, 110, 0.24);
    `}

    ${onlyMobile &&
    css`
      ${breakpoints.desktop} {
        display: none;
      }
    `}

    ${onlyDesktop &&
    css`
      display: none;

      ${breakpoints.desktop} {
        display: block;
      }
    `}

    ${props}
  `}

  :disabled {
    background: #f1f1f1;
    color: #999;
  }
`;

export default Button;
