import styled, { css } from "styled-components";
import { Icon } from "ui";

const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
`;

const PageList = styled.ul`
  list-style-type: none;
  display: inline-grid;
  grid-auto-flow: column;
`;

interface QuickNavLinkProps {
  type: "next" | "previous";
  disabled?: boolean;
}

const QuickNavLink = styled.a<QuickNavLinkProps>`
  ${({ type, disabled }) => {
    console.log(disabled);
    return css`
      text-decoration: none;

      ${type === "next" &&
      css`
        text-align: right;

        svg {
          transform: rotate(180deg);
        }
      `}

      ${!disabled &&
      css`
        svg path {
          fill: #4361ee;
        }
      `}
    `;
  }}
`;

const PageIndex = styled.a<{ active?: boolean }>`
  ${({ active }) => css`
    text-decoration: none;
    box-sizing: border-box;
    width: 29px;
    height: 29px;
    border-radius: 4px;
    display: grid;
    place-content: center center;
    color: #8d9cbb;

    ${active &&
    css`
      background: #4361ee;
      color: white;
    `};
  `}
`;

function Pagination() {
  return (
    <Content>
      <QuickNavLink href="#" type="previous" disabled>
        <Icon name="leftArrow" />
      </QuickNavLink>
      <PageList>
        <li>
          <PageIndex href="#" active>
            1
          </PageIndex>
        </li>
        <li>
          <PageIndex href="#">2</PageIndex>
        </li>
        <li>
          <PageIndex href="#">3</PageIndex>
        </li>
        <li>
          <PageIndex href="#">4</PageIndex>
        </li>
        <li>
          <PageIndex href="#">5</PageIndex>
        </li>
      </PageList>
      <QuickNavLink href="#" type="next">
        <Icon name="leftArrow" />
      </QuickNavLink>
    </Content>
  );
}

export default Pagination;
