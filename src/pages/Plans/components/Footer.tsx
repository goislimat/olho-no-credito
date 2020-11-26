import styled from "styled-components";

import { AddressInfo, ContactForm, FooterPaymentAndRights } from "components";
import { breakpoints, colors } from "ui/theme";

const StyledFooter = styled.footer`
  padding: 50px 40px;
  background: ${colors.greenGradient};

  ${breakpoints.desktop} {
    padding: 84px 136px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 200px;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <ContactForm />
      <AddressContainer>
        <AddressInfo />
      </AddressContainer>
      <FooterPaymentAndRights />
    </StyledFooter>
  );
}

export default Footer;
