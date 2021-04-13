import styled, { css } from "styled-components";
import { colors, breakpoints } from "ui/theme";

import {
  ToKnowMore,
  TitleContainer,
  IconDonutScore,
  IconPointer,
} from "pages/FullConsultation/components";

import { Container, Row, Col } from "./styles";

const ContainerScore = styled.div`
  margin: 68px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FlexBaseline = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const InitRotation = styled.div`
  position: absolute;
  transform: rotate(160deg);
`;

interface IconRotationProp {
  angle?: number;
}

const IconRotation = styled.div<IconRotationProp>`
  ${({ angle }) =>
    css`
      ${angle &&
      css`
        transform: rotate(${angle}deg);
      `}// 0° | 90° | 188° | 278°
    `}
`;

const TextBold = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: ${colors.gray};
  margin-top: 40px;

  ${breakpoints.desktop} {
    width: auto;
    margin-top: 0;
  }
`;

const TextSmall = styled.p`
  display: block;
  width: 100%;
  font-size: 18px;
  color: ${colors.gray400};

  ${breakpoints.desktop} {
    width: auto;
  }
`;

const TextRed = styled.p`
  display: block;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 35px;
  color: ${colors.red};

  ${breakpoints.desktop} {
    width: auto;
  }
`;

function QuodScore({ angle, score }) {
  return (
    <Container>
      <TitleContainer text="Quod Score" color="red" />
      <ContainerScore>
        <Row>
          <Col col={4} style={{ marginTop: -13 }}>
            <Row>
              <Col col={12}>
                <FlexCenter>
                  <IconDonutScore size={160} />
                  <InitRotation>
                    <IconRotation angle={angle}>
                      <IconPointer size={120} />
                    </IconRotation>
                  </InitRotation>
                </FlexCenter>
              </Col>
              <Col col={12} style={{ marginTop: -12 }}>
                <FlexBaseline>
                  <TextRed>{score}</TextRed>
                  <TextSmall>/1.000</TextSmall>
                </FlexBaseline>
              </Col>
            </Row>
          </Col>
          <Col col={8}>
            <Row style={{ justifyContent: "space-between", marginBottom: 40 }}>
              <Col col={4}>
                <FlexCenter>
                  <TextBold>RISCO DE CRÉDITO</TextBold>
                  <TextRed>ALTO</TextRed>
                </FlexCenter>
              </Col>

              <Col col={8} style={{ paddingRight: 40, paddingLeft: 40 }}>
                <FlexCenter>
                  <TextSmall>
                    Este grupo de consumidores apresenta uma probabilidade de
                    pagamento menor do que a média da população Brasileira.
                  </TextSmall>
                </FlexCenter>
              </Col>
            </Row>

            <Row style={{ justifyContent: "space-between" }}>
              <Col col={4}>
                <FlexCenter>
                  <TextBold>PROBRABILIDADE DE PAGAMENTO</TextBold>
                  <TextRed>1%</TextRed>
                </FlexCenter>
              </Col>

              <Col col={8} style={{ paddingRight: 40, paddingLeft: 40 }}>
                <FlexCenter>
                  <TextSmall>
                    Consumidores deste grupo tem 99% de chance de não pagar um
                    compromisso financeiro nos próximos meses.
                  </TextSmall>
                </FlexCenter>
              </Col>
            </Row>
          </Col>
        </Row>
      </ContainerScore>
      <ToKnowMore />
    </Container>
  );
}

export default QuodScore;
