import styled, { css } from "styled-components";
import { Icon } from "ui";
import { breakpoints } from "ui/theme";

const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;

  ${breakpoints.desktop} {
    max-width: 400px;
    margin: 0 auto;
  }
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
      display: flex;
      align-items: center;
      color: #4f5f82;

      svg {
        margin: 0 12px 0 0;
      }

      ${type === "next" &&
      css`
        justify-content: flex-end;
        color: #4361ee;

        svg {
          transform: rotate(180deg);
          margin: 0 0 0 12px;
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

const Label = styled.span`
  display: none;

  ${breakpoints.desktop} {
    display: inline-block;
  }
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
        <Icon name="leftArrow" /> <Label>Anterior</Label>
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
        <Label>Próximo</Label> <Icon name="leftArrow" />
      </QuickNavLink>
    </Content>
  );
}

export default Pagination;
