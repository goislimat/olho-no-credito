import styled from "styled-components";

import { breakpoints } from "ui/theme";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 30px 0;
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 170px;
  left: 0;

  ${breakpoints.desktop} {
    top: -170px;

    img {
      width: 200%;
    }
  }
`;
