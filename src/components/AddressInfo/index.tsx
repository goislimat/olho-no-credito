import styled from "styled-components";

import { Icon } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const Container = styled.address`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: max-content;
  row-gap: 28px;
  font-style: normal;
  color: ${colors.white};
`;

const AddressItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 18px;

  p {
    font-family: ${typography.inter};
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
  }

  ${breakpoints.desktop} {
    p {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

const SocialMediaContainer = styled.div`
  margin-top: 10px;

  p {
    text-transform: uppercase;
    font-family: ${typography.inter};
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
  }

  div {
    display: grid;
    grid-template-columns: 35px 35px;
    column-gap: 28px;
  }

  ${breakpoints.desktop} {
    font-size: 18px;
    line-height: 21px;
  }
`;

function AddressInfo() {
  return (
    <Container>
      <AddressItem>
        <Icon name="mapPin" />
        <p>Olho no Carro, São Paulo - SP, Brasil</p>
      </AddressItem>
      <AddressItem>
        <Icon name="phone" />
        <p>(11) 2222 - 1219</p>
      </AddressItem>
      <AddressItem>
        <Icon name="mail" />
        <p>contato@olhonocarro.com.br</p>
      </AddressItem>
      <AddressItem>
        <Icon name="monitor" />
        <p>www.olhonocarro.com.br</p>
      </AddressItem>

      <SocialMediaContainer>
        <p>Siga-nos nas redes sociais</p>
        <div>
          <Icon name="instagram" />
          <Icon name="facebook" />
        </div>
      </SocialMediaContainer>
    </Container>
  );
}

export default AddressInfo;
