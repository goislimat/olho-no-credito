import styled from "styled-components";
import { colors, breakpoints } from "ui/theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 48px;
  margin-top: 44px;

  ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr;
    margin-top: 100px;
    padding: 0 6%;
  }
`;

const QuodContainer = styled.div`
  display: none;
  margin-bottom: 10px;

  ${breakpoints.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 54px;

    img {
      width: 191px;
    }
  }
`;

const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  img {
    display: none;
  }

  ${breakpoints.desktop} {
    margin-bottom: 54px;

    img {
      display: block;
      width: 191px;
    }
  }
`;

const DistributorLabel = styled.span`
  font-family: Inter, sans-serif;
  font-size: 10px;
  line-height: 12px;
  font-weight: 600;
  color: ${colors.blue300};
  letter-spacing: 1px;
  text-transform: uppercase;

  ${breakpoints.desktop} {
    font-size: 13px;
    line-height: 15px;
  }
`;

const ShareCode = styled.div`
  ${breakpoints.desktop} {
    display: none;
  }
`;

const QRShare = styled.div`
  display: flex;

  img,
  p {
    display: none;
  }

  ${breakpoints.desktop} {
    img,
    p {
      display: block;
    }
  }
`;

const ContainerBTN = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 48px;
`;

const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-size: 30px;
    color: ${colors.green200};
  }

  ${breakpoints.desktop} {
    display: none;
  }
`;

function Share() {
  return (
    <Container>
      <QuodContainer>
        <DistributorLabel>Distribuidor autorizado</DistributorLabel>
        <div>
          <img src="/static_assets/images/quod.svg" alt="quod logo" />
        </div>
      </QuodContainer>

      <ContainerTitle>
        <span>Consulta completa</span>
      </ContainerTitle>

      <QRContainer>
        <QRShare>
          <div>
            <img src="/static_assets/images/quod.svg" alt="quod logo" />
          </div>
          <div>
            <p>Acesse, salve ou compartilhe a consulta em seu celular</p>
            <p>
              Aponte a camêra de seu celular para acessar a sua consulta no seu
              dispositivo móvel
            </p>
            <ContainerBTN>
              <div>IMPRIMIR</div>
              <div>GERAR PDF</div>
            </ContainerBTN>
          </div>
        </QRShare>

        <ShareCode>Compartilhar</ShareCode>
      </QRContainer>
    </Container>
  );
}

export default Share;
