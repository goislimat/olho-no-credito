import styled from "styled-components";

import { AddressInfo, ContactForm, FooterPaymentAndRights } from "components";
import { colors } from "ui/theme";

const StyledFooter = styled.footer`
  padding: 50px 40px;
  background: ${colors.greenGradient};
`;

function Footer() {
  return (
    <StyledFooter>
      <ContactForm />
      <AddressInfo />
      <FooterPaymentAndRights />
    </StyledFooter>
  );
}

export default Footer;
