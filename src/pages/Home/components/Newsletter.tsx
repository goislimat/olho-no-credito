import styled from "styled-components";

import { NewsletterComponent } from "components";
import { breakpoints, colors } from "ui/theme";

const Container = styled.div`
  display: none;
  ${breakpoints.desktop} {
    display: block;
    background: ${colors.gray200};
    padding: 50px 40px 80px;
  }
`;

function Newsletter() {
  return (
    <Container>
      <NewsletterComponent />
    </Container>
  );
}

export default Newsletter;
