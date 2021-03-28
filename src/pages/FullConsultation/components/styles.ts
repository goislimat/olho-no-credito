import styled from "styled-components";

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
