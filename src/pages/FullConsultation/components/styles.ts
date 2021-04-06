import styled, { css } from "styled-components";

import { breakpoints } from "ui/theme";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto 47px auto;
  background: white;

  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);

  ${breakpoints.desktop} {
    margin: 0 auto 33px auto;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  /* float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  } */
`;

interface ColProp {
  col?: number;
  order?: number;
  orderDesktop?: number;
}

export const Col = styled.div<ColProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  ${({ order }) =>
    css`
      ${order !== undefined &&
      css`
        order: ${order};
      `}
    `}

  ${breakpoints.desktop} {
    width: ${({ col }) => (col ? (col / 12) * 100 : "8.33")}%;
    display: block;

    ${({ orderDesktop }) =>
      css`
        ${orderDesktop !== undefined &&
        css`
          order: ${orderDesktop} !important;
        `}
      `}
  }
`;
