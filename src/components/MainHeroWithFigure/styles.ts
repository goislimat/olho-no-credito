import styled, { css } from "styled-components";

import { breakpoints } from "ui/theme";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 30px 0;
`;

export const ImageContainer = styled.div<{ removeImageOnMobile?: true }>`
  ${({ removeImageOnMobile }) => css`
    ${removeImageOnMobile &&
    `
      display: none;
    `}

    position: absolute;
    z-index: -10;
    top: 170px;
    left: 0;

    ${breakpoints.desktop} {
      display: block;
      top: -170px;
      z-index: 2;

      img {
        width: 200%;
      }
    }
  `}
`;
