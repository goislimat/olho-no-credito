import styled from "styled-components";
import { Button } from "ui";
import { colors, breakpoints } from "ui/theme";
import { Row, Col } from "./styles";

const Container = styled.div`
  display: flex;
  margin-top: 44px;
  margin-bottom: 60px;

  ${breakpoints.desktop} {
    margin-top: 100px;
    margin-bottom: 80px;
    padding: 0 6%;
  }
`;

const QuodContainer = styled(Col)`
  display: none !important;
  margin-bottom: 10px;
  text-align: center;

  ${breakpoints.desktop} {
    display: flex !important;
    flex-direction: column;
    margin-bottom: 54px;

    img {
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

const ContainerButton = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  ${breakpoints.desktop} {
    margin: 0 -10px;
  }
`;

const ContainerShareText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerShareMobile = styled.div`
  margin: 20px 0;
  display: flex;
  flex: 1;

  ${breakpoints.desktop} {
    display: none;
  }
`;

const ContainerShareDesktop = styled.div`
  display: none;
  flex: 1;

  ${breakpoints.desktop} {
    display: flex;
    margin: 40px 0;
  }
`;

const ShareTitle = styled.span`
  font-size: 25px;
  font-weight: 600;
  color: ${colors.gray400};
`;

const ShareText = styled.span`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 125%;
  color: ${colors.gray400};
`;

const ButtonShare = styled(Button)`
  flex: 1;
  padding: 10px 0;
  margin: 0 10px;
`;

function Share() {
  return (
    <Container>
      <Row>
        <QuodContainer col={4}>
          <DistributorLabel>Distribuidor autorizado</DistributorLabel>
          <div>
            <img src="/static_assets/images/quod.svg" alt="quod logo" />
          </div>
        </QuodContainer>
        <Col col={5}>
          <Row>
            <Col col={12} order={2} orderDesktop={1}>
              <ContainerShareMobile>
                <ButtonShare background="horizontalBlueGradient">
                  COMPARTILHAR
                </ButtonShare>
              </ContainerShareMobile>
              <ContainerShareDesktop>
                <Row>
                  <Col col={4}>
                    <img src="/static_assets/images/quod.svg" alt="quod logo" />
                  </Col>
                  <Col col={8}>
                    <ContainerShareText>
                      <ShareTitle>
                        Acesse, salve ou compartilhe a consulta em seu celular
                      </ShareTitle>
                      <ShareText>
                        Aponte a camêra de seu celular para acessar a sua
                        consulta no seu dispositivo móvel
                      </ShareText>
                    </ContainerShareText>
                  </Col>
                </Row>
              </ContainerShareDesktop>
            </Col>
            <Col col={12} order={1} orderDesktop={2}>
              <ContainerButton>
                <ButtonShare background="horizontalBlueGradient">
                  IMPRIMIR
                </ButtonShare>
                <ButtonShare background="horizontalBlueGradient">
                  GERAR PDF
                </ButtonShare>
              </ContainerButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Share;
