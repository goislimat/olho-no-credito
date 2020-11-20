import styled from "styled-components";

import { Icon } from "ui";
import { colors, typography } from "ui/theme";

const Container = styled.address`
  display: grid;
  grid-auto-flow: row;
  row-gap: 28px;
  font-style: normal;
  color: ${colors.white};
  margin-bottom: 62px;
`;

const AddressItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 18px;

  p {
    font-family: ${typography.poppins};
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
  }
`;

const SocialMediaContainer = styled.div`
  margin-top: 10px;

  p {
    text-transform: uppercase;
    font-family: ${typography.poppins};
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 10px;
  }

  div {
    display: grid;
    grid-template-columns: 35px 35px;
    column-gap: 28px;
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
