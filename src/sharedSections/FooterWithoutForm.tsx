import styled from "styled-components";

import { AddressInfo, FooterPaymentAndRights } from "components";
import { breakpoints, colors } from "ui/theme";

const StyledFooter = styled.footer`
  padding: 50px 40px;
  background: ${colors.greenGradient};

  ${breakpoints.desktop} {
    padding: 84px 136px 48px;
    display: grid;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
`;

function FooterWithoutForm() {
  return (
    <StyledFooter>
      <AddressContainer>
        <AddressInfo />
      </AddressContainer>
      <FooterPaymentAndRights />
    </StyledFooter>
  );
}

export default FooterWithoutForm;
