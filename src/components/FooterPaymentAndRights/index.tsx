import Image from "next/image";
import styled from "styled-components";

import { Button, Icon } from "ui";
import { breakpoints, colors, typography } from "ui/theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
  margin-top: 62px;

  ${breakpoints.desktop} {
    grid-column: 1 / span 2;
    grid-template-columns: 200px 1fr 200px;
    margin-top: 200px;
  }
`;

const CreditCardsContainer = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / 2;

  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: 10px;
  align-items: center;
  margin: 0 auto;

  ${breakpoints.desktop} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    .mastercard-icon {
      width: 77px;
      height: 46px;
    }

    .visa-icon {
      width: 81px;
      height: 25px;
    }

    .american-express-icon {
      width: 62px;
      height: 62px;
    }

    .elo-icon {
      width: 106px;
      height: 41px;
    }

    .diners-club-icon {
      width: 61px;
      height: 51px;
    }

    .boleto-icon {
      width: 51px;
      height: 51px;
    }
  }
`;

const ImageContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: -20px;
  margin-left: -25px;

  ${breakpoints.desktop} {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

const ButtonContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  ${breakpoints.desktop} {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`;

const GoToTopButton = styled(Button)`
  svg {
    transform: rotate(90deg);
  }
`;

const Rights = styled.p`
  grid-column: 1 / span 2;
  grid-row: 3 / 4;

  font-family: ${typography.inter};
  font-weight: 800;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: ${colors.white};
  margin-top: -20px;

  ${breakpoints.desktop} {
    grid-column: 1 / span 3;
    grid-row: 2 / 3;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }
`;

const AuthorizedDistributor = styled.div`
  display: none;

  ${breakpoints.desktop} {
    grid-column: 1 / span 3;
    grid-row: 3 / 4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.white};
    margin-top: 48px;

    address,
    p {
      font-family: ${typography.poppins};
      font-size: 16px;
      line-height: 24px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

function FooterPaymentAndRights() {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/static_assets/images/mascote.svg"
          alt="mascote da olho no crédito"
          width="130"
          height="130"
        />
      </ImageContainer>

      <CreditCardsContainer>
        <Icon name="mastercard" />
        <Icon name="visa" />
        <Icon name="americanExpress" />
        <Icon name="elo" />
        <Icon name="dinersClub" />
        <Icon name="boleto" />
      </CreditCardsContainer>

      <ButtonContainer>
        <GoToTopButton
          onClick={() => {}}
          background="white"
          withShadow
          rounded
          padding="26px"
        >
          <Icon name="leftArrow" />
        </GoToTopButton>
      </ButtonContainer>

      <Rights>
        2020 - Todos os direitos reservados - CNPJ: 25400804/0001-09
      </Rights>

      <AuthorizedDistributor>
        <p>Distribuidor Autorizado</p>
        <Image
          src="/static_assets/images/quod.svg"
          alt="quod logo"
          width="134"
          height="74"
        />
        <address>www.olhonocred.com.br</address>
      </AuthorizedDistributor>
    </Container>
  );
}

export default FooterPaymentAndRights;
