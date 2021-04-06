import styled from "styled-components";
import { colors, breakpoints } from "ui/theme";

import { ToKnowMore, TitleContainer } from "pages/FullConsultation/components";

import { Container, Row, Col } from "./styles";

const PendingCreditControlContainer = styled.div`
  display: flex;
  margin: 41px 0;
  justify-content: space-around;

  ${breakpoints.desktop} {
    margin: 27px 0;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const CenterEnd = styled.div`
  display: flex;
  justify-content: center;

  ${breakpoints.desktop} {
    margin-right: 23px;
    justify-content: flex-end;
  }
`;

const CenterStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${breakpoints.desktop} {
    justify-content: flex-start;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  background: ${colors.gray100};
  border: 7px solid ${colors.red300};
  border-radius: 50%;
`;

const CircleText = styled.p`
  font-weight: 800;
  font-size: 72px;
  color: ${colors.red200};
`;

const TextBold = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.gray400};

  ${breakpoints.desktop} {
    font-size: 25px;
  }
`;

const TextRed = styled.p`
  font-weight: 800;
  font-size: 30px;
  color: ${colors.red300};
`;

function PendingCreditControl() {
  return (
    <Container>
      <TitleContainer text="Pendências ControlCred" color="red" />
      <PendingCreditControlContainer>
        <Row>
          <Col col={6}>
            <Row>
              <Col col={6} order={2} orderDesktop={1}>
                <CenterEnd>
                  <Circle>
                    <CircleText>4</CircleText>
                  </Circle>
                </CenterEnd>
              </Col>
              <Col col={6} order={1} orderDesktop={2}>
                <Center>
                  <Row>
                    <Col col={12} order={2} orderDesktop={1}>
                      <TextBold>EXISTEM 4</TextBold>
                    </Col>
                    <Col col={12} order={2} orderDesktop={1}>
                      <TextBold>PENDÉNCIAS</TextBold>
                    </Col>
                  </Row>
                </Center>
              </Col>
            </Row>
          </Col>
          <Col col={6}>
            <Row>
              <Col col={12}>
                <Center>
                  <TextRed>Valor R$:</TextRed>
                </Center>
              </Col>
              <Col col={12}>
                <Center>
                  <TextRed>14.990</TextRed>
                </Center>
              </Col>
            </Row>
          </Col>
        </Row>
      </PendingCreditControlContainer>
      <ToKnowMore />
    </Container>
  );
}

export default PendingCreditControl;
